<script lang="ts">
	import { onMount } from 'svelte';

	let dialog: HTMLDialogElement;
	onMount(() => {
		dialog.showModal();
	});
</script>

<dialog bind:this={dialog}>
	<slot />
</dialog>

<style>
	dialog {
		border-radius: 20px;
		width: 900px;
		padding: 0;
		border: 0;
		box-shadow: 7px 7px 10px var(--navyblue);
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.7);
		backdrop-filter: blur(10px);
	}
</style>
