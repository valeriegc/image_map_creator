export function resizeArea(element) {
	const rightBottom = document.createElement('div');
	rightBottom.direction = 'northwest';

	rightBottom.classList.add('grabber');

	let moving = null,
		firstRect = null,
		firstPosition = null;

	element.appendChild(rightBottom);

	rightBottom.addEventListener('mousedown', onMousedown);

	function onMousedown(event) {
		moving = event.target;
		const rect = element.getBoundingClientRect();
		const parent = element.parentElement.getBoundingClientRect();

		firstRect = {
			width: rect.width,
			height: rect.height,
			left: rect.left - parent.left,
			right: parent.right - rect.right,
			top: rect.top - parent.top,
			bottom: parent.bottom - rect.bottom
		};

		firstPosition = { x: event.pageX, y: event.pageY };
		moving.classList.add('selected');
	}
	function onMouseup() {
		if (!moving) return;

		moving.classList.remove('selected');
		moving = null;
		firstRect = null;
		firstPosition = null;
	}

	function whileMoving(event) {
		if (!moving) return;

		let delta;

		delta = firstPosition.x - event.pageX;
		element.style.width = `${firstRect.width - delta}px`;
		delta = event.pageY - firstPosition.y;
		element.style.height = `${firstRect.height + delta}px`;
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
