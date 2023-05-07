<script lang="ts">
	import { resizeArea } from '../../actions/Resize';
	import { files, mapObjects, userProvidedLink } from './stores';

	let svgMoving = false;

	function removeArea(i: number) {
		$mapObjects.splice(i, 1);
		$mapObjects = $mapObjects;
	}

	function addArea(event: MouseEvent) {
		$mapObjects.push({ x: event.offsetX, y: event.offsetY, link: '', heigth: 50, width: 200 });
		$mapObjects = $mapObjects;
	}

	function svgMoveStart() {
		svgMoving = true;
	}

	function svgMoveExecute(event: MouseEvent, i: number) {
		if (svgMoving) {
			$mapObjects[i].x += event.movementX;
			$mapObjects[i].y += event.movementY;
			$mapObjects = $mapObjects;
		}
	}

	function svgMoveEnd() {
		svgMoving = false;
	}
</script>

{#if $files?.[0]}
	<div class="completeWrap">
		<div class="inputWrap">
			Please input the source for your image here:
			<input
				bind:value={$userProvidedLink}
				style="margin-left:10px;border-radius:5px; border: solid darkblue 2px; color:darkblue"
			/>
		</div>
		<div class="imageCanvasWrap" on:mousedown={addArea} on:mouseup={svgMoveEnd}>
			<img src={URL.createObjectURL($files[0])} />
			{#each $mapObjects as _, i}
				<div
					class="areaRect"
					use:resizeArea
					on:mousedown|stopPropagation={svgMoveStart}
					on:mousemove|stopPropagation={(e) => svgMoveExecute(e, i)}
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
		border: darkgrey solid 2px;
		background-color: RGBA(255, 255, 255, 0.4);
		cursor: pointer;
		display: flex;
	}
	:global(.grabber) {
		position: absolute;
		box-sizing: border-box;
		height: 7px;
		width: 7px;
		bottom: -7px;
		right: -7px;
		cursor: se-resize;
		border-radius: 100%;
		border: solid 2px darkblue;
		background-color: whitesmoke;
	}

	.inputWrap {
		margin-top: 30px;
		color: darkblue;
		font-size: 15px;
		font-weight: bold;
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
		background-color: whitesmoke;
		border: 1px solid darkgrey;
		border-radius: 5px;
		height: 20%;
		width: 75%;
		font-size: small;
	}
	img {
		border: solid darkblue 5px;
	}
	.remove {
		background-color: transparent;
		color: darkred;
		font-size: 12px;
		position: absolute;
		top: -12px;
		right: -12px;
	}
</style>
