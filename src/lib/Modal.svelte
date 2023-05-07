<script lang="ts">
	let dialog: HTMLDialogElement;
	export let open: boolean;

	$: if (open) {
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
</style>
