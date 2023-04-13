<script lang="ts">
	import { isMapModalOpen, files } from './stores';
	import MapModal from './MapModal.svelte';
	import Toolbar from './Toolbar.svelte';
	import Canvas from './Canvas.svelte';
	import PlaceHolder from './Placeholder.svelte';
</script>

{#if $isMapModalOpen}
	<MapModal />
{/if}

<div class="pageWrapper">
	<header>
		<h1>Image-map Generator</h1>
	</header>
	<Toolbar />
	{#if !$files}
		<PlaceHolder />
	{/if}
	<Canvas />
</div>

<style>
	header {
		display: flex;
		justify-content: center;
		z-index: 1;
		background-color: #000099;
	}
	h1 {
		background-color: #000099;
		margin-top: 50px;
		font-size: 50px;
		color: white;
		height: 100px;
	}
	/* make header div that will be full width by itself and make that a flex box */
</style>
