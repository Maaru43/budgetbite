import { browser } from '$app/environment';
import { get, writable } from 'svelte/store';

const STORAGE_KEY = 'budgetbite-favorites';

function normalizeIds(value) {
	if (!Array.isArray(value)) return [];

	return value
		.map((id) => String(id))
		.filter((id) => id.length > 0);
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
	localStorage.setItem(STORAGE_KEY, JSON.stringify(normalizeIds(ids)));
});

function addFavorite(id) {
	const stringId = String(id);

	if (!stringId) return;

	favoriteIds.update((ids) =>
		ids.includes(stringId) ? ids : [...ids, stringId]
	);
}

function removeFavorite(id) {
	const stringId = String(id);

	if (!stringId) return;

	favoriteIds.update((ids) => ids.filter((favoriteId) => favoriteId !== stringId));
}

function toggleFavorite(id) {
	const stringId = String(id);

	if (!stringId) return;

	favoriteIds.update((ids) =>
		ids.includes(stringId)
			? ids.filter((favoriteId) => favoriteId !== stringId)
			: [...ids, stringId]
	);
}

function isFavorite(id) {
	return get(favoriteIds).includes(String(id));
}

export { favoriteIds, addFavorite, removeFavorite, toggleFavorite, isFavorite };