<script lang="ts">
	import Modal from '$lib/Modal.svelte';
	import ToastMessage from '$lib/ToastMessage.svelte';
	import { isMapModalOpen, mapObjects, userProvidedLink, isMapCopied } from './stores';
	import { onMount } from 'svelte';
	let open = false;

	let imagemap = `<img src = "${$userProvidedLink}" alt="" usemap="">
<map name="">
`;
	onMount(() => {
		for (let i = 0; i < $mapObjects.length; i++) {
			imagemap =
				imagemap +
				`	<area shape="${$mapObjects[i].type}" coords="${$mapObjects[i].x}, ${$mapObjects[i].y}, ${
					$mapObjects[i].x + $mapObjects[i].width
				}, ${$mapObjects[i].y - $mapObjects[i].height}" alt="" href="${$mapObjects[i].link}">
`;
		}
		imagemap = imagemap + `</map>`;
		return imagemap;
	});

	function toastMessageHider() {
		if ($isMapCopied) {
			setTimeout(() => ($isMapCopied = false), 3000);
		}
	}
	function copyToClipBoard() {
		navigator.clipboard.writeText(imagemap);
		$isMapCopied = true;
		toastMessageHider();
	}
</script>

<Modal>
	{#if $isMapCopied}
		<ToastMessage />
	{/if}
	<div class="container">
		<h3>Copy the code below:</h3>
		<pre class="map">{imagemap}</pre>
		<div class="buttonWrap">
			<button on:click={copyToClipBoard}>Copy to clipboard</button>
			<button on:click={() => ($isMapModalOpen = false)}>Return</button>
		</div>
	</div>
</Modal>

<style>
	pre,
	div,
	h3 {
		color: var(--navyblue);
	}
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 500px;
		color: black;
	}
	.buttonWrap {
		display: flex;
		margin-bottom: 5%;
		gap: 60px;
	}
	button {
		background-image: radial-gradient(var(--navyblue), var(--lightrose));
		height: 70px;
		width: 180px;
		border-radius: 20px;
		padding: 3px;
		font-size: 1rem;
		cursor: pointer;
		border: white 1px solid;
	}

	.map {
		padding: 4%;
		font-size: 13px;
		flex: 1;
	}
</style>
