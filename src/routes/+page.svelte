<script lang="ts">
	import { isMapModalOpen } from './stores';
	import MapModal from './MapModal.svelte';
	import Toolbar from './Toolbar.svelte';
	import Canvas from './Canvas.svelte';
</script>

<div class="pageWrapper">
	<h1>Image-map Creator</h1>
	<Toolbar />
	<Canvas />

	{#if $isMapModalOpen}
		<MapModal />
	{/if}
</div>

<style>
	h1 {
		font-size: 40px;
		background-color: darkblue;
		border-radius: 10px;
		padding-inline: 10px;
		padding-bottom: 5px;
		text-align: center;
		width: 40%;
		margin-left: 27%;
		color: white;
	}
	/* make header div that will be full width by itself and make that a flex box */
</style>
