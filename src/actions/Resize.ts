import type { Writable } from 'svelte/store';
import type { MapObject, isResizeOn } from '../routes/generator/stores';

interface FirstRect {
	width: number;
	height: number;
}

export function resizeArea(
	element: HTMLElement,
	parameters: { isResizeOn: Writable<boolean>; mapObject: MapObject }
) {
	const { isResizeOn, mapObject } = parameters;
	const circle = document.createElement('div');
	circle.classList.add('grabber');

	element.appendChild(circle);

	let movingTarget: EventTarget | null = null;
	let initialSize: FirstRect | null = null;
	let firstPosition: { x: number; y: number } | null = null;

	function onMousedown(event: MouseEvent) {
		isResizeOn.set(true);
		movingTarget = event.target;
		//get properties of the area we wish to resize, parent of the event listening div
		const rect = element.getBoundingClientRect();
		//get the parent of the area that is being resized
		const parent = element.parentElement?.getBoundingClientRect();

		if (!parent) return;

		initialSize = {
			width: rect.width,
			height: rect.height
		};

		firstPosition = { x: event.pageX, y: event.pageY };
	}
	circle.addEventListener('mousedown', onMousedown);

	function onMouseup() {
		if (!movingTarget) return;

		movingTarget = null;
		initialSize = null;
		firstPosition = null;
		isResizeOn.set(false);
	}

	window.addEventListener('mouseup', onMouseup);
	function whileMoving(event: MouseEvent) {
		if (!movingTarget || !initialSize || !firstPosition) return;

		const deltaX = firstPosition.x - event.pageX;
		element.style.width = `${initialSize.width - deltaX}px`;
		mapObject.width = initialSize.width - deltaX;

		const deltaY = event.pageY - firstPosition.y;
		element.style.height = `${initialSize.height + deltaY}px`;
		mapObject.height = initialSize.height - deltaX;
	}
	window.addEventListener('mousemove', whileMoving);
	return {
		destroy() {
			window.removeEventListener('mousemove', whileMoving);
			window.removeEventListener('mousemove', onMousedown);

			element.removeChild(circle);
		}
	};
}
