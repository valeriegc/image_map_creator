<div class="lockIcon">
	<div class="lockIconBox" />
	<div class="lockIconCircle" />
	<div class="lockIconHalfCircle" />
</div>

<style>
	.lockIcon {
		border: solid white 2px;
		background-color: var(--navyblue);
		border-radius: 100%;
		height: 65px;
		width: 65px;
	}
	.lockIconBox {
		height: 20px;
		width: 30px;
		border: white solid 2px;
		position: absolute;
		top: 45%;
		left: 26%;
		border-bottom-left-radius: 20%;
		border-bottom-right-radius: 20%;
		z-index: 2;
		background-color: var(--navyblue);
	}
	.lockIconCircle {
		height: 7px;
		width: 7px;
		border: white solid 2px;
		position: absolute;
		border-bottom-left-radius: 20%;
		border-bottom-right-radius: 20%;
		border-radius: 100%;
		top: 55%;
		left: 43%;
		z-index: 3;
		background-color: var(--navyblue);
	}
	.lockIconHalfCircle {
		height: 20px;
		width: 20px;
		border: white solid 2px;
		position: absolute;
		top: 25%;
		left: 34%;
		border-bottom-left-radius: 20%;
		border-bottom-right-radius: 20%;
		border-radius: 100%;
		z-index: 1;
	}
</style>
