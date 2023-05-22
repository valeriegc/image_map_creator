import { writable } from 'svelte/store';
export interface MapObject {
	x: number;
	y: number;
	link: string;
	width: number;
	height: number;
	type: string;
}
export const isMapModalOpen = writable(false);
export const startModalOpen = writable(false);
export const files = writable<FileList | null>(null);
export const mapObjects = writable<MapObject[]>([]);
export const userProvidedLink = writable('');
export const imageLinkFromUser = writable('');
export const isResizeOn = writable(false);
export const shapeType = writable('rect');
export const showMenu = writable(false)
