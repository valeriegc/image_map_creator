import { writable } from 'svelte/store';

export const isMapModalOpen = writable(false);
export const startModalOpen = writable(false);
export const files = writable<FileList | null>(null);
export const mapObjects = writable<
	{ x: number; y: number; link: string; width: number; heigth: number }[]
>([]);
export const userProvidedLink = writable('Please provide the link for your image');
export const imageLinkFromUser = writable('');
