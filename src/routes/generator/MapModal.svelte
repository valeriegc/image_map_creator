<script lang="ts">
	import Modal from '$lib/Modal.svelte';
	import { isMapModalOpen, mapObjects, userProvidedLink } from './stores';
	import { onMount } from 'svelte';
	let open = false;

	let imagemap = `<img src = "${$userProvidedLink}" alt="" usemap="">
    <map name="">`;
	onMount(() => {
		open = true;
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

<Modal {open}>
	<div class="container">
		<div class="map">{imagemap}</div>
		<footer>
			<button class="buttonClass1" on:click={copyToClipBoard}>Copy to clipboard</button>
			<button class="buttonClass1" on:click={() => ($isMapModalOpen = false)}>Return</button>
		</footer>
	</div>
</Modal>

<style>
	.container {
		display: flex;
		flex-direction: column;
		height: 400px;
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
