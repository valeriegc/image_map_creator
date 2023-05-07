interface FirstRect {
	width: number;
	height: number;
}

export function resizeArea(element: HTMLElement) {
	const rightBottom = document.createElement('div');
	rightBottom.classList.add('grabber');
	rightBottom.addEventListener('mousedown', onMousedown);

	element.appendChild(rightBottom);

	let movingTarget: EventTarget | null = null;
	let initialSize: FirstRect | null = null;
	let firstPosition: { x: number; y: number } | null = null;

	function onMousedown(event: MouseEvent) {
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
	window.addEventListener('mouseup', onMouseup);

	function onMouseup() {
		if (!movingTarget) return;

		movingTarget = null;
		initialSize = null;
		firstPosition = null;
	}

	window.addEventListener('mousemove', whileMoving);

	function whileMoving(event: MouseEvent) {
		if (!movingTarget || !initialSize || !firstPosition) return;

		const deltaX = firstPosition.x - event.pageX;
		element.style.width = `${initialSize.width - deltaX}px`;

		const deltaY = event.pageY - firstPosition.y;
		element.style.height = `${initialSize.height + deltaY}px`;
	}

	return {
		destroy() {
			window.removeEventListener('mousemove', whileMoving);
			window.removeEventListener('mousemove', onMousedown);

			element.removeChild(rightBottom);
		}
	};
}
