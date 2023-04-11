<script lang="ts">
	import { isMapModalOpen, files } from './stores';
	$: console.log($files);
</script>

<button class="generateButton" on:click={() => ($isMapModalOpen = true)}>Generate map</button>
<div class="buttonContainer">
	<input type="file" bind:files={$files} />
	<button class="buttonClass">Input a link</button>
</div>

<style>
	.generateButton {
		height: 100px;
		width: 100px;
		border-radius: 100%;
		color: whitesmoke;
		text-align: center;
		align-self: flex-end;
		background-color: darkblue;
		margin-left: 80%;
		border-color: whitesmoke;
	}
	input[type='file'] {
		width: 35%;
		max-width: 100%;
		color: black;
		padding: 5px;
		background: whitesmoke;
		border-radius: 10px;
		margin-left: 20%;
		height: 70%;
	}
	input[type='file']::file-selector-button {
		margin-right: 20px;
		border: none;
		background: darkblue;
		padding: 6px 20px;
		border-radius: 10px;
		color: aliceblue;
		cursor: pointer;
	}

	input[type='file']::file-selector-button:hover {
		background: rgb(49, 49, 213);
	}

	.buttonClass {
		border-radius: 10px;
		width: 20%;
		height: 80%;
		font-size: 15px;
		border: none;
		background: darkblue;
		border-radius: 10px;
		color: aliceblue;
		cursor: pointer;
		margin-right: 11%;
	}
	.buttonContainer {
		display: flex;
		flex-direction: row;
		gap: 20%;
		width: 60%;
		height: 5%;
		margin-left: 15%;
	}
</style>
