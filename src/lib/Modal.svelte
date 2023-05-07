<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
	let dialog: HTMLDialogElement;
	export let open: boolean;

	$: if (open && mounted) {
		dialog.showModal();
	}
</script>

<dialog bind:this={dialog}>
	<slot />
</dialog>

<style>
	dialog {
		border-radius: 20px;
		border: 0;
		width: 700px;
		padding: 0;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.7);
		backdrop-filter: blur(10px);
	}
</style>
