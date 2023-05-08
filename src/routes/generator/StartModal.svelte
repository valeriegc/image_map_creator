<script lang="ts">
	import Modal from '$lib/Modal.svelte';
	import { startModalOpen, files, imageLinkFromUser } from './stores';
</script>

<Modal>
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
			<label style="margin-top:7%;font-weight:bold"
				>Input a link
				<input type="text" bind:value={$imageLinkFromUser} style="margin-top:1%" />
				{#if $imageLinkFromUser !== null}
					<button
						on:click={() => ($startModalOpen = false)}
						style="background-color:darkblue; width:40px; padding:0">Start</button
					>
				{/if}
			</label>
		</div>
	</div>
</Modal>

<style>
	button {
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
	input[type='file'] {
		width: 250px;
		height: 30px;
		color: whitesmoke;
		padding: 5px;
		background: #000099;
		border-radius: 10px;
		border: solid whitesmoke 1px;
	}
	input[type='file']::file-selector-button {
		margin-right: 20px;
		background: whitesmoke;
		padding: 6px 20px;
		border-radius: 10px;
		color: #000099;
		cursor: pointer;
		border: solid whitesmoke 1px;
	}
</style>
