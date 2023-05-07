interface FirstRect {
	width: number;
	height: number;
	left: number;
	right: number;
	top: number;
	bottom: number;
}

export function resizeArea(element: HTMLElement) {
	const rightBottom = document.createElement('div');

	rightBottom.classList.add('grabber');

	let moving: EventTarget | null = null;
	let firstRect: FirstRect | null = null;
	let firstPosition: { x: number; y: number } | null = null;

	element.appendChild(rightBottom);

	rightBottom.addEventListener('mousedown', onMousedown);

	function onMousedown(event: MouseEvent) {
		moving = event.target;
		const rect = element.getBoundingClientRect();
		const parent = element.parentElement?.getBoundingClientRect();

		if (!parent) return;

		firstRect = {
			width: rect.width,
			height: rect.height,
			left: rect.left - parent.left,
			right: parent.right - rect.right,
			top: rect.top - parent.top,
			bottom: parent.bottom - rect.bottom
		};

		firstPosition = { x: event.pageX, y: event.pageY };
	}
	function onMouseup() {
		if (!moving) return;

		moving = null;
		firstRect = null;
		firstPosition = null;
	}

	function whileMoving(event: MouseEvent) {
		if (!moving || !firstRect || !firstPosition) return;

		const deltaX = firstPosition.x - event.pageX;
		element.style.width = `${firstRect.width - deltaX}px`;

		const deltaY = event.pageY - firstPosition.y;
		element.style.height = `${firstRect.height + deltaY}px`;
	}

	window.addEventListener('mousemove', whileMoving);
	window.addEventListener('mouseup', onMouseup);

	return {
		destroy() {
			window.removeEventListener('mousemove', whileMoving);
			window.removeEventListener('mousemove', onMousedown);

			element.removeChild(rightBottom);
		}
	};
}
