<script lang="ts">
	import { isMapModalOpen, userProvidedLink } from './stores';
	import Save from '../../icons/Save.svg';
	import Redo from '../../icons/Redo.svg';
	let nameOfMap = '';
</script>

<div class="toolbar">
	<div class="inputWrap">
		<p>Shapes</p>
		<label style="color:white; font-size:0.9rem">Name of the map:</label>
		<input
			type="text"
			class="mapNameInput"
			value={nameOfMap}
			placeholder="Provide a name for the map"
		/>
		<label style="color:white;font-size:0.9rem">Link to original image:</label>
		<input
			type="text"
			class="mapNameInput"
			bind:value={$userProvidedLink}
			placeholder="Provide a link to the original image"
		/>
	</div>
	<div class="shapeBox">
		<button class="toolbarButton" id="shapeConvert" style="background-color:transparent">
			<div class="rectShape" />
		</button>
		<button class="toolbarButton" id="shapeConvert" style="background-color:transparent">
			<div class="rectShape" style="border-radius:100%" />
		</button>
	</div>
	<div class="buttonBox">
		<button class="toolbarButton" style="padding: 3%;margin-right:10%">
			<img src={Save} />
		</button>
		<button class="toolbarButton" style="padding:3%;margin-right:10%">
			<img src={Redo} />
		</button>
		<button class="generateButton" on:click={() => ($isMapModalOpen = true)}>Generate</button>
		<div class="userProfile">
			<div class="userProfileHead" />
			<div class="userProfileBody" />
		</div>
	</div>
</div>

<style>
	p {
		position: absolute;
		color: white;
		left: 590px;
		top: 5%;
		font-weight: bold;
	}
	.toolbar {
		display: flex;
		align-items: center;
		flex-direction: row;
		background-color: var(--navyblue);
		border: var(--lightbeige) solid 1px;
		border-radius: 40px;
		width: min(90%, 2000px);
		margin: auto;
	}
	.buttonBox {
		display: flex;
		flex-direction: row;
		height: 50%;
		justify-self: flex-end;
		margin-left: 10%;
		padding-top: 2%;
		padding-bottom: 2%;
		padding-left: 5%;
		padding-right: 5%;
		border: red solid 2px;
	}
	.rectShape {
		height: 30px;
		width: 30px;
		border: solid white 2px;
		background-color: var(--lightrose);
		margin: auto;
	}
	.inputWrap {
		height: 100%;
		margin-left: 5%;
		width: 20%;
		display: flex;
		flex-direction: column;
		padding: 0.6%;
	}
	.mapNameInput {
		height: 25px;
		width: 230px;
		border: white 1px dotted;
		color: white;
		background-color: transparent;
		margin-top: 2%;
		margin-bottom: 1.5%;
	}
	.toolbarButton {
		background-image: radial-gradient(var(--navyblue), var(--lightrose));
		height: 70px;
		width: 70px;
		border-radius: 20px;
		padding: 5px;
		margin-top: 1%;
		cursor: pointer;
	}
	#shapeConvert :hover {
		background-color: white;
		transition: 0.7s;
	}
	.shapeBox {
		height: 90%;
		width: 400px;
		border-radius: 20px;
		color: white;
		padding: 10px;
		display: flex;
		flex-direction: row;
		gap: 10%;
		padding-top: 2%;
	}
	.userProfileBody {
		height: 80px;
		width: 100px;
		position: absolute;
		top: 50px;
		border-radius: 100%;
		left: -6px;
		background-color: whitesmoke;
	}
	.userProfileHead {
		height: 35px;
		width: 35px;
		background-color: white;
		border-radius: 100%;
		position: absolute;
		right: 22px;
		top: 13px;
	}
	.userProfile {
		overflow: hidden;
		align-self: flex-end;
		height: 80px;
		width: 80px;
		border: solid white 3px;
		border-radius: 100%;
		background-color: var(--lightrose);
		margin-right: 10%;
		position: absolute;
		right: 0.5%;
		top: 8%;
		cursor: pointer;
	}
	.generateButton {
		background-image: radial-gradient(var(--navyblue), var(--lightrose));
		height: 60px;
		width: 120px;
		font-size: 1rem;
		font-weight: bold;
		color: white;
		border: 0;
		padding: 0;
		margin-top: 1%;
	}
	::placeholder {
		color: var(--lightbeige);
	}
</style>
