<script lang="ts">
	import { isMapModalOpen, userProvidedLink, shapeType } from './stores';
	import Save from '../../icons/Save.svg';
	import Redo from '../../icons/Redo.svg';
	import UserIconBig from '../../icons/UserIconBig.svelte';
	let nameOfMap = '';
</script>

<div class="toolbar">
	<div class="inputWrap">
		<label>Name of the map:</label>
		<input type="text" class="input" value={nameOfMap} placeholder="Provide a name for the map" />
		<label style=" margin-top:10px">Link to original image:</label>
		<input
			type="text"
			class="input"
			bind:value={$userProvidedLink}
			placeholder="Provide a link to the original image"
		/>
	</div>
	<div>
		<div class="shapesContainer">
			<button class="toolbarButton" type="button" on:click={() => ($shapeType = 'rect')}>
				<div class="shape" style="border-color:{$shapeType == 'rect' ? 'black' : 'white'}" />
			</button>
			<button class="toolbarButton" type="button" on:click={() => ($shapeType = 'circle')}>
				<div
					class="shape"
					style="border-radius:100%;border-color:{$shapeType == 'circle' ? 'black' : 'white'}"
				/>
			</button>
		</div>
	</div>
	<div class="buttonBox">
		<button class="toolbarButton" style="padding: 3%" type="button">
			<img src={Save} />
		</button>
		<button class="toolbarButton" style="padding:3%" type="button">
			<img src={Redo} />
		</button>
		<button
			class="toolbarButton"
			id="generateButton"
			on:click={() => ($isMapModalOpen = true)}
			type="button">Generate</button
		>
		<UserIconBig />
	</div>
</div>

<style>
	.toolbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: var(--navyblue);
		border: var(--lightbeige) solid 1px;
		border-radius: 40px;
		width: min(90%, 2000px);
		margin: auto;
		padding: 20px;
		padding-inline: 80px;
	}
	.inputWrap {
		display: flex;
		flex-direction: column;
	}
	.input {
		height: 25px;
		width: 230px;
		border: var(--lightbeige) 1px solid;
		background-color: transparent;
		border-radius: 10px;
	}
	input::placeholder {
		color: var(--lightbeige);
	}
	label {
		font-size: 0.9rem;
		color: white;
		margin-bottom: 5px;
	}
	.shapesContainer {
		display: flex;
		gap: 20px;
	}
	.shape {
		height: 30px;
		width: 30px;
		border: solid white 2px;
		background-color: var(--lightrose);
		margin: auto;
	}
	.shape:hover {
		background-color: white;
		transition: 0.6s;
	}
	.buttonBox {
		display: flex;
		gap: 20px;
	}
	.toolbarButton {
		background-image: radial-gradient(var(--navyblue), var(--lightrose));
		height: 70px;
		width: 70px;
		border-radius: 20px;
		padding: 5px;
		cursor: pointer;
		border: white 1px solid;
	}
	.toolbarButton:hover {
		border: black 2px solid;
	}
	#generateButton {
		width: 120px;
		font-size: 1rem;
		font-weight: bold;
	}
</style>
