<script lang="ts">
	import { isMapModalOpen, mapObjects, userProvidedLink } from './stores';
	import { onMount } from 'svelte';

	let dialog: HTMLDialogElement;

	let imagemap = `<img src = "${$userProvidedLink}" alt="" usemap="">
    <map name="">`;
	onMount(() => {
		dialog.showModal();
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
	function copyToClipBoard() {
		navigator.clipboard.writeText(imagemap);
	}
</script>

<dialog bind:this={dialog}>
	<div class="map">{imagemap}</div>
	<footer>
		<button class="buttonClass1" on:click={copyToClipBoard}>Copy to clipboard</button>
		<button class="buttonClass1" on:click={() => ($isMapModalOpen = false)}>Return to start</button>
	</footer>
</dialog>

<style>
	dialog {
		border-radius: 20px;
		border: 0;
		height: 400px;
		width: 700px;
		padding: 0;
		display: flex;
		flex-direction: column;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.7);
		backdrop-filter: blur(10px);
	}
	.buttonClass1 {
		margin-block: 3%;
		padding-block: 10px;
	}
	.map {
		padding: 4%;
		font-size: 13px;
		flex: 1;
	}

	footer {
		background-color: #000099;
		display: flex;
		justify-content: center;
		gap: 100px;
	}
</style>
