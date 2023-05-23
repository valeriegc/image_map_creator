<script lang="ts">
	import { isMapModalOpen, files, startModalOpen, imageLinkFromUser, showMenu } from './stores';
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

<div class="pageWrapper" on:click={() => ($showMenu ? ($showMenu = false) : null)}>
	<Toolbar />
	<Canvas />
</div>

<style>
	.pageWrapper {
		background-image: linear-gradient(var(--lightrose), var(--navyblue));
		margin: 0;
		height: 100vh;
		padding: 3%;
	}
</style>
