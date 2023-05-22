<script>
	import { showMenu } from '../routes/generator/stores';
</script>

<div
	class="userProfile"
	on:click|stopPropagation={() => (!$showMenu ? ($showMenu = true) : ($showMenu = false))}
>
	<div class="userProfileHead" />
	<div class="userProfileBody" />
</div>
{#if $showMenu}
	<div class="choiceBox">
		<a
			style="border-bottom: darkgray solid 1px;
">Your profile</a
		>
		<a>Sign out</a>
	</div>
{/if}

<style>
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
		height: 80px;
		width: 80px;
		border: solid white 3px;
		border-radius: 100%;
		background-image: radial-gradient(var(--navyblue), var(--lightrose));
		cursor: pointer;
		position: relative;
		flex-shrink: 0;
	}
	.userProfile:hover {
		border: solid black 3px;
	}
	.choiceBox {
		width: 200px;
		background-color: var(--navyblue);
		position: absolute;
		right: 200px;
		top: 160px;
		z-index: 2;
		border-radius: 10px;
		border: solid white 1px;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}
	a {
		padding: 5%;
		width: 199px;
		text-align: center;
	}
	a:hover {
		cursor: pointer;
		background-image: radial-gradient(var(--navyblue), var(--lightrose));
	}
</style>
