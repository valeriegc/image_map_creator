<script lang="ts">
	import Modal from '$lib/Modal.svelte';
	import { startModalOpen, files, imageLinkFromUser } from './stores';
</script>

<Modal open={true}>
	<div class="container">
		<div class="existingMaps">
			<h3>View your existing maps</h3>
		</div>
		<div class="createNew">
			<h3>Create from scratch</h3>
			<div class="buttonContainer">
				<input type="file" bind:files={$files} />
			</div>
			OR
			<label style="margin-top:7%;background-color:transparent;font-weight:bold">Input a link</label
			>
			<input type="text" bind:value={$imageLinkFromUser} style="margin-top:1%" />
		</div>
	</div>
	<button
		on:click={() => ($startModalOpen = false)}
		style="width:15px; position:absolute; right:5px;
        top:5px;font-size: 30px; border-style:none;color:darkblue
        ">x</button
	>
</Modal>

<style>
	button {
		background-color: transparent;
	}
	h3 {
		background-color: transparent;
	}
	.container {
		margin: 5%;
		display: flex;
		flex-direction: row;
		position: relative;
	}
	.existingMaps {
		width: 50%;
		margin-right: 5px;
		height: 270px;
		border-radius: 10%;
		display: flex;
		flex-direction: column;
		padding: 5%;
		border: solid lightgrey 2px;
	}
	.createNew {
		border-radius: 10%;
		margin-left: 5px;
		width: 50%;
		height: 270px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10%;
		padding: 5%;
		border: solid rgb(177, 177, 229) 2px;
	}
</style>
