import { browser } from '$app/environment';
import { derived, get, writable } from 'svelte/store';
import { meals as initialMeals } from '$lib/data.js';

const STORAGE_KEY = 'budgetbite-meals';

function loadStorage() {
 if (!browser) return { added: [], removed: [] };
 try {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : { added: [], removed: [] };
 } catch {
  return { added: [], removed: [] };
 }
}

const storage = writable(loadStorage());

storage.subscribe((value) => {
 if (!browser) return;
 localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
});

const localMeals = derived(storage, ($storage) => $storage.added);
const removedMealIds = derived(storage, ($storage) => $storage.removed);

const meals = derived([localMeals, removedMealIds], ([$localMeals, $removedIds]) => {
 const activeDefault = initialMeals.filter((meal) => !$removedIds.includes(meal.id));
 const activeLocal = $localMeals.filter((meal) => !$removedIds.includes(meal.id));
 return [...activeDefault, ...activeLocal];
});

function nextId() {
 const maxDefault = Math.max(0, ...initialMeals.map((meal) => meal.id));
 const maxLocal = Math.max(0, ...get(localMeals).map((meal) => meal.id));
 return Math.max(maxDefault, maxLocal) + 1;
}

function addMeal(meal) {
 storage.update((state) => ({
  ...state,
  added: [...state.added, meal]
 }));
}

function removeMeal(id) {
 storage.update((state) => ({
  ...state,
  removed: state.removed.includes(id) ? state.removed : [...state.removed, id],
  added: state.added.filter((meal) => meal.id !== id)
 }));
}

function normalizeIngredients(ingredients) {
 if (Array.isArray(ingredients)) return ingredients.map((item) => String(item).trim()).filter(Boolean);
 if (typeof ingredients === 'string') {
  return ingredients
   .split(',')
   .map((item) => item.trim())
   .filter(Boolean);
 }
 return [];
}

function buildMeal({ name, price, time, category, ingredients }) {
 const normalizedCategory = category.trim().toLowerCase();
 const vegetarian = ['salat', 'vegan', 'vegetarisch'].some((term) => normalizedCategory.includes(term));
 const hearty = vegetarian ? false : true;
 return {
  id: nextId(),
  name: name.trim(),
  price: Number(parseFloat(price.toString().replace(',', '.')) || 0),
  time: Number(time),
  category: category.trim(),
  ingredients: normalizeIngredients(ingredients),
  vegetarian,
  hearty
 };
}

export { meals, localMeals, addMeal, removeMeal, buildMeal };
