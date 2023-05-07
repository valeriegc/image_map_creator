<script lang="ts">
	import { isMapModalOpen, files } from './stores';
	$: console.log($files);
</script>

<div class="buttonContainer">
	<input type="file" bind:files={$files} />
	<button class="generateButton" on:click={() => ($isMapModalOpen = true)}>Generate map</button>
</div>

<style>
	.buttonContainer {
		display: flex;
		justify-content: center;
		gap: 90px;
		background-color: #000099;
		padding-top: 20px;
		height: 120px;
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
