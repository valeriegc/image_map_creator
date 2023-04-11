<script lang="ts">
	import { isMapModalOpen, mapObjects } from './stores';
	import { onMount } from 'svelte';

	let imagemap = `<img src = "" alt="" usemap="">
    <map name="">`;
	onMount(() => {
		for (let i = 0; i < $mapObjects.length; i++) {
			imagemap =
				imagemap +
				` <area shape="rect" coords="${$mapObjects[i].x}, ${$mapObjects[i].y}, ${
					$mapObjects[i].x + $mapObjects[i].width
				}, ${$mapObjects[i].y - $mapObjects[i].heigth}" alt="" href="${$mapObjects[i].link}">`;
		}
		imagemap = imagemap + `</map>`;
		return imagemap;
	});
</script>

<dialog open>
	<div class="mapWrapper">
		<div class="map">{imagemap}</div>
		<div class="dialogueFunctions">
			<button
				class="buttonClass"
				style="border:solid white 1px; height: 40%; margin-left: 20%; margin-top:3%"
				>Copy to clipboard</button
			><button
				class="buttonClass"
				style="border:solid white 1px; height:40%; margin-left:10%;margin-top:3%"
				on:click={() => ($isMapModalOpen = false)}>Return to start</button
			>
		</div>
	</div>
</dialog>

<style>
	.map {
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		padding: 4%;
		font-size: 10px;
	}
	.dialogueFunctions {
		background-color: darkblue;
		height: 20%;
		width: 100%;
		margin-top: 43%;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
	}
	dialog {
		height: 100vh;
		width: auto;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: RGBA(1, 1, 1, 0.7);
		z-index: 6;
	}
	.mapWrapper {
		height: 400px;
		width: 700px;
		border-radius: 20px;
		background-color: rgb(226, 226, 226);
	}
</style>
