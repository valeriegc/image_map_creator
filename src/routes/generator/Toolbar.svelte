<script lang="ts">
	import { isMapModalOpen, userProvidedLink } from './stores';
	let nameOfMap = 'Name of map here';
</script>

<div class="buttonContainer">
	<input type="text" class="mapNameInput" value={nameOfMap} />
	<input type="text" class="mapNameInput" style="top:70px;" bind:value={$userProvidedLink} />
	<div class="shapeBox">Shapes here</div>
	<button class="generateButton" style="right:460px;">Save to maps</button>
	<button class="generateButton" style="right:330px;">Restart</button>
	<button class="generateButton" on:click={() => ($isMapModalOpen = true)}>Generate map</button>
	<div class="userProfile">
		<div class="userProfileHead" />
		<div class="userProfileBody" />
	</div>
</div>

<style>
	.shapeBox {
		height: 70px;
		width: 320px;
		background-color: transparent;
		border-radius: 20px;
		position: absolute;
		top: 10px;
		color: white;
		padding: 10px;
		left: 320px;
	}
	.mapNameInput {
		height: 30px;
		width: 230px;
		position: absolute;
		left: 50px;
		background-color: transparent;
		border: white 1px dashed;
		color: white;
	}
	.userProfileBody {
		height: 80px;
		width: 100px;
		position: absolute;
		top: 50px;
		border-radius: 100%;
		left: -6px;
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
		background-color: darkblue;
		margin-right: 5%;
		position: absolute;
		right: 1%;
		top: 15%;
	}
	.generateButton {
		height: 40px;
		width: 100px;
		padding: 0;
		font-weight: bold;
		position: absolute;
		right: 200px;
		top: 40px;
	}
	.buttonContainer {
		display: flex;
		justify-content: center;
		background-color: #000099;
		padding-top: 20px;
		height: 100px;
		margin: 2% 2% 0 2%;
		border-radius: 40px;
		position: relative;
	}
</style>
