import { writable } from 'svelte/store';

export const todos = writable([
    { id: 1, name: 'Learn Svelte', completed: true },
    { id: 2, name: 'Learn Sapper', completed: false },
    { id: 3, name: 'Build something awesome', completed: false }
]);