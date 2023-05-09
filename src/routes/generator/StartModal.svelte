<script lang="ts">
	import Modal from '$lib/Modal.svelte';
	import { startModalOpen, files, imageLinkFromUser } from './stores';
</script>

<Modal>
	<div class="container">
		<div class="existingMaps">
			<h3>Choose from your saved maps</h3>
			<p>No maps available.</p>
		</div>
		<div style="width:1.5px;height:80%;position:absolute;background-color:black;left:50%;top:10%" />
		<div class="createNew">
			<h3 style="margin-left:-15%">Create from scratch</h3>
			<div class="buttonContainer">
				<input type="file" bind:files={$files} style="margin-left:-12.5%" />
			</div>
			<div
				style="width:160px;height:0.5px;position:absolute;background-color:black;left:52%;top:52%"
			/>
			<div
				style="width:160px;height:0.5px;position:absolute;background-color:black;right:3%;top:52%"
			/>
			<p style="font-weight:bold;position:absolute;top:50%;right:25%">OR</p>
			<div class="inputWrap">
				<label style="margin-left:27%;font-weight:bold;font-size:0.rem;"
					>Input a link
					<input
						type="text"
						bind:value={$imageLinkFromUser}
						style="margin-top:10%;width:240px; border: solid 2px var(--navyblue;border-radius:10px;height:30px;"
					/>
					{#if $imageLinkFromUser !== null}
						<button on:click={() => ($startModalOpen = false)}>Start</button>
					{/if}
				</label>
			</div>
		</div>
	</div>
</Modal>

<style>
	p {
		margin: auto;
	}
	.inputWrap {
		height: 200px;
		margin-top: 30%;
		width: 300px;
	}
	button {
		width: 120px;
		height: 30px;
		color: white;
		font-size: 1rem;
		padding: 5px;
		margin-top: 25px;
		margin-left: 15%;
		border-radius: 10px;
		border: solid white 1px;
		background-image: radial-gradient(var(--navyblue), var(--lightrose));
	}
	.container {
		display: flex;
		flex-direction: row;
		position: relative;
		background-image: linear-gradient(var(--lightbeige), white);
		border: 0;
		border-radius: 20px;
		padding-bottom: 0;
	}
	.existingMaps {
		width: 50%;
		margin-right: 5px;
		height: 400px;
		border-radius: 10%;
		display: flex;
		flex-direction: column;
		padding: 5%;
		align-items: center;
	}
	.createNew {
		border-radius: 10%;
		margin-left: 5px;
		width: 50%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20%;
		padding-top: 5%;
	}
	input[type='file'] {
		width: 250px;
		height: 30px;
		color: white;
		padding: 5px;
		margin-top: 25px;
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
		border: solid whitesmoke 1px;
	}
	h3 {
		font-size: 1.5rem;
		font-weight: bold;
	}
</style>
