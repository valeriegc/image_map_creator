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
	<Toolbar />
	{#if !$files}
		<PlaceHolder />
	{/if}
	<Canvas />
</div>

<style>
	/* make header div that will be full width by itself and make that a flex box */
</style>
