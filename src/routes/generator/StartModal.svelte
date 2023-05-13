<script lang="ts">
	import Modal from '$lib/Modal.svelte';
	import { startModalOpen, files, imageLinkFromUser } from './stores';
</script>

<Modal>
	<div class="container">
		<div class="existingMaps">
			<p style="font-size:25px;">Choose from your saved maps</p>
			<p>No maps available.</p>
		</div>
		<div class="createNew">
			<p style="font-size:25px;">Create from scratch</p>
			<input type="file" bind:files={$files} />
			<p>OR</p>
			<label style="color:var(--navyblue); align-self:center;"
				>Input a link:
				<input type="text" bind:value={$imageLinkFromUser} style="margin-left:10px;" />
			</label>
			<button
				style={$imageLinkFromUser !== ''
					? 'background-image: radial-gradient(var(--navyblue), var(--lightrose))'
					: 'background-color:var(--lightbeige)'}
				on:click={() =>
					$imageLinkFromUser !== '' ? ($startModalOpen = false) : ($startModalOpen = true)}
				>Start</button
			>
		</div>
	</div>
</Modal>

<style>
	.container {
		display: flex;
		position: relative;
		border-radius: 20px;
		height: 500px;
	}
	.existingMaps {
		width: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-image: linear-gradient(var(--lightbeige), white);
	}
	.createNew {
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 50px;
	}
	p {
		color: var(--navyblue);
	}
	input {
		color: var(--navyblue);
		border: var(--navyblue) solid 1px;
		border-radius: 10px;
		height: 25px;
		width: 200px;
	}
	input[type='file'] {
		margin-top: -3%;
		width: 250px;
		height: 40px;
		padding: 5px;
		color: white;
		border-radius: 10px;
		border: solid white 1px;
		background-image: radial-gradient(var(--navyblue), var(--lightrose));
	}
	input[type='file']::file-selector-button {
		margin-right: 20px;
		background: whitesmoke;
		padding: 6px 20px;
		border-radius: 10px;
		color: var(--navyblue);
		cursor: pointer;
	}
	button {
		height: 30px;
		font-size: 1rem;
		border-radius: 10px;
		border: solid white 1px;
	}
</style>
