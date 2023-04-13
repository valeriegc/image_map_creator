<script lang="ts">
	import { files, mapObjects } from './stores';

	let svgMoving = false;
	let resizing = true;
	let currentIndex: number;

	function resizeStart(event: MouseEvent, i: number) {
		resizing = true;
		currentIndex = i;
	}
	function resizeEnd(event: MouseEvent) {
		resizing = false;
	}

	function logMouseDown(event: MouseEvent) {
		$mapObjects.push({ x: event.offsetX, y: event.offsetY, link: '', heigth: 50, width: 200 });
		$mapObjects = $mapObjects;
	}

	function svgMoveStart(event: MouseEvent, i: number) {
		svgMoving = true;
		currentIndex = i;
	}

	function svgMoveExecute(event: MouseEvent) {
		if (svgMoving) {
			$mapObjects[currentIndex].x += event.movementX;
			$mapObjects[currentIndex].y += event.movementY;
			$mapObjects = $mapObjects;
		} else if (resizing) {
			$mapObjects[currentIndex].heigth = event.movementY - $mapObjects[currentIndex].heigth;
			$mapObjects[currentIndex].width = event.movementX - $mapObjects[currentIndex].width;
			$mapObjects = $mapObjects;
		}
	}

	function svgMoveEnd(event: MouseEvent) {
		svgMoving = false;
	}
</script>

{#if $files?.[0]}
	<div class="completeWrap">
		<div class="imageCanvasWrap" on:mousedown={logMouseDown}>
			<img src={URL.createObjectURL($files[0])} />
			{#each $mapObjects as coordinate, i}
				<div
					class="areaRect"
					on:mousedown|stopPropagation={(e) => svgMoveStart(e, i)}
					on:mousemove={svgMoveExecute}
					on:mouseup={svgMoveEnd}
					style="height:{$mapObjects[i].heigth}px; width:{$mapObjects[i].width}px;top: {$mapObjects[
						i
					].y}px; left: {$mapObjects[i].x}px;"
				>
					<input
						class="linkInput"
						placeholder="submit link here"
						bind:value={$mapObjects[i].link}
						type="text"
					/>
					<div
						class="circle"
						style="position:absolute;bottom:-5px; right:-5px;  overflow:visible"
						on:mousedown|stopPropagation={(e) => resizeStart(e, i)}
						on:mouseup={resizeEnd}
					/>
				</div>
			{/each}
		</div>
	</div>
{/if}

<style>
	.completeWrap {
		display: flex;
		justify-content: center;
		width: 100%;
	}
	.imageCanvasWrap {
		position: relative;
		margin-top: 30px;
		overflow: hidden;
	}
	.linkInput {
		background-color: whitesmoke;
		border: 1px solid darkgrey;
		border-radius: 5px;
		height: 40%;
	}
	img {
		border: solid darkblue 5px;
	}
	.areaRect {
		z-index: 1;
		position: absolute;
		border: darkgrey solid 2px;
		background-color: RGBA(255, 255, 255, 0.4);
		cursor: pointer;
		display: flex;
	}
	.circle {
		height: 7px;
		width: 7px;
		border-radius: 100%;
		border: solid 3px darkblue;
		background-color: whitesmoke;
	}
</style>
