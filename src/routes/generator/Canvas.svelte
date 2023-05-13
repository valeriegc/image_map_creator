<script lang="ts">
	import { resizeArea } from '../../actions/Resize';
	import { files, imageLinkFromUser, mapObjects, isResizeOn, shapeType } from './stores';

	let svgMoving = false;

	function removeArea(i: number) {
		$mapObjects.splice(i, 1);
		$mapObjects = $mapObjects;
	}

	function addArea(event: MouseEvent) {
		$mapObjects.push({
			x: event.offsetX,
			y: event.offsetY,
			link: '',
			height: $shapeType == 'circ' ? 200 : 100,
			width: $shapeType == 'circ' ? 200 : 300,
			type: $shapeType
		});
		$mapObjects = $mapObjects;
	}

	function svgMoveStart() {
		if (!$isResizeOn) {
			svgMoving = true;
		}
	}

	function svgMoveExecute(event: MouseEvent, i: number) {
		if (svgMoving && !$isResizeOn) {
			$mapObjects[i].x += event.movementX;
			$mapObjects[i].y += event.movementY;
			$mapObjects = $mapObjects;
		}
	}

	function svgMoveEnd() {
		svgMoving = false;
	}
</script>

{#if $files?.[0] || $imageLinkFromUser}
	<div class="completeWrap">
		<div class="imageCanvasWrap" on:mousedown={addArea} on:mouseup={svgMoveEnd}>
			<img src={$files !== null ? URL.createObjectURL($files[0]) : $imageLinkFromUser} />
			{#each $mapObjects as mapObject, i}
				<div
					class="areaRect"
					use:resizeArea={{ mapObject, isResizeOn }}
					on:mousedown|stopPropagation={svgMoveStart}
					on:mousemove={(e) => svgMoveExecute(e, i)}
					style="height:{$mapObjects[i].height}px; width:{$mapObjects[i].width}px;top: {$mapObjects[
						i
					].y}px; left: {$mapObjects[i].x}px;border-radius:{$mapObjects[i].type == 'rect'
						? '0%'
						: '100%'};"
				>
					<input
						class="linkInput"
						placeholder="Input link"
						bind:value={$mapObjects[i].link}
						type="text"
					/>

					<div
						class="circle"
						style="position:absolute;bottom:-5px; right:-5px;  overflow:visible"
					/>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div class="remove" on:click={() => removeArea(i)}>x</div>
				</div>
			{/each}
		</div>
	</div>
{/if}

<style>
	.areaRect {
		z-index: 1;
		position: absolute;
		border: var(--navyblue) solid 2px;
		background-color: RGBA(19, 19, 23, 0.4);
		cursor: pointer;
		display: flex;
	}
	:global(.grabber) {
		position: absolute;
		box-sizing: border-box;
		height: 13px;
		width: 13px;
		bottom: -7px;
		right: -7px;
		cursor: se-resize;
		border-radius: 100%;
		border: solid 3px var(--navyblue);
		background-color: white;
	}
	.completeWrap {
		display: flex;
		align-items: center;
		width: 100%;
		flex-direction: column;
	}
	.imageCanvasWrap {
		position: relative;
		margin-top: 30px;
		overflow: hidden;
		cursor: crosshair;
	}
	.linkInput {
		background-color: white;
		margin-top: 30px;
		margin-left: 20px;
		border-radius: 5px;
		height: 20%;
		width: 75%;
		font-size: 0.75rem;
		border: 0;
		color: var(--navyblue);
	}
	.linkInput::placeholder {
		color: var(--navyblue);
	}
	img {
		border: solid var(--navyblue) 5px;
	}
	.remove {
		background-color: transparent;
		color: red;
		font-size: 12px;
		position: absolute;
		top: -12px;
		right: -12px;
	}
</style>
