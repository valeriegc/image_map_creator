<script lang="ts">
	import { isMapModalOpen, files, startModalOpen, imageLinkFromUser } from './stores';
	import MapModal from './MapModal.svelte';
	import Toolbar from './Toolbar.svelte';
	import Canvas from './Canvas.svelte';
	import { onMount } from 'svelte';
	import StartModal from './StartModal.svelte';

	onMount(() => {
		$startModalOpen = true;
	});
</script>

{#if $startModalOpen && ($files == null || $imageLinkFromUser == null)}
	<StartModal />
{/if}

{#if $isMapModalOpen}
	<MapModal />
{/if}

<div class="pageWrapper">
	<Toolbar />
	<Canvas />
</div>

<style>
	/* make header div that will be full width by itself and make that a flex box */
</style>
