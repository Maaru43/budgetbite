import { browser } from '$app/environment';
import { get, writable } from 'svelte/store';

const STORAGE_KEY = 'budgetbite-favorites';

function normalizeIds(value) {
 if (!Array.isArray(value)) return [];
 return value
  .map((id) => Number(id))
  .filter((id) => Number.isFinite(id));
}

function loadFavorites() {
 if (!browser) return [];
 try {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? normalizeIds(JSON.parse(raw)) : [];
 } catch {
  return [];
 }
}

const favoriteIds = writable(loadFavorites());

favoriteIds.subscribe((ids) => {
 if (!browser) return;
 localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
});

function addFavorite(id) {
 const numericId = Number(id);
 if (!Number.isFinite(numericId)) return;
 favoriteIds.update((ids) => (ids.includes(numericId) ? ids : [...ids, numericId]));
}

function removeFavorite(id) {
 const numericId = Number(id);
 if (!Number.isFinite(numericId)) return;
 favoriteIds.update((ids) => ids.filter((favoriteId) => favoriteId !== numericId));
}

function toggleFavorite(id) {
 favoriteIds.update((ids) => (ids.includes(id) ? ids.filter((favoriteId) => favoriteId !== id) : [...ids, id]));
}

function isFavorite(id) {
 return get(favoriteIds).includes(id);
}

export { favoriteIds, addFavorite, removeFavorite, toggleFavorite, isFavorite };
