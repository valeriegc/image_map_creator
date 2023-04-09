<script lang="ts">
	let files: FileList;
	let coords: { x: number; y: number; link: string; width: number; heigth: number }[] = [];
	let svgMoving = false;
	let resizing = true;
	let currentIndex: number;
	let dialogState = false;
	let imagemap = `<img src = "" alt="" usemap="">
    <map name="">`;

	function closeDialog() {
		dialogState = false;
	}
	function generateMap() {
		for (let i = 0; i < coords.length; i++) {
			imagemap =
				imagemap +
				` <area shape="rect" coords="${coords[i].x}, ${coords[i].y}, ${
					coords[i].x + coords[i].width
				}, ${coords[i].y - coords[i].heigth} " alt="" href="${coords[i].link}">`;
		}
		imagemap = imagemap + `</map>`;
		dialogState = true;
		return imagemap;
	}

	function resizeStart(event: MouseEvent, i: number) {
		resizing = true;
		currentIndex = i;
	}
	function resizeEnd(event: MouseEvent) {
		resizing = false;
	}

	function logMouseDown(event: MouseEvent) {
		coords.push({ x: event.offsetX, y: event.offsetY, link: '', heigth: 50, width: 200 });
		coords = coords;
	}

	function svgMoveStart(event: MouseEvent, i: number) {
		svgMoving = true;
		currentIndex = i;
	}

	function svgMoveExecute(event: MouseEvent) {
		if (svgMoving) {
			coords[currentIndex].x += event.movementX;
			coords[currentIndex].y += event.movementY;
			coords = coords;
		} else if (resizing) {
			coords[currentIndex].heigth = event.movementY - coords[currentIndex].heigth;
			coords[currentIndex].width = event.movementX - coords[currentIndex].width;
			coords = coords;
		}
	}

	function svgMoveEnd(event: MouseEvent) {
		svgMoving = false;
	}
	console.log(coords);
</script>

<div class="pageWrapper">
	<header>
		<h1>Image-map Creator</h1>
		<button class="generateButton" on:click={generateMap}>Generate map</button>
	</header>
	<div class="buttonContainer">
		<input type="file" bind:files />
		<button class="buttonClass">Input a link</button>
	</div>
	{#if dialogState}
		<dialog open>
			<div class="mapWrapper">
				{imagemap}
				<div class="dialogueFunctions">
					<button
						class="buttonClass"
						style="border:solid white 1px; height: 40%; margin-left: 20%; margin-top:3%"
						>Copy to clipboard</button
					><button
						class="buttonClass"
						style="border:solid white 1px; height:40%; margin-left:10%;margin-top:3%"
						on:click={closeDialog}>Return to start</button
					>
				</div>
			</div>
		</dialog>
	{/if}

	{#if files && files[0]}
		<p class="fileName">
			{files[0].name}
		</p>
		<div class="imageCanvasWrap" on:mousedown={logMouseDown}>
			<img src={URL.createObjectURL(files[0])} />
			{#each coords as coordinate, i}
				<div
					class="areaRect"
					on:mousedown|stopPropagation={(e) => svgMoveStart(e, i)}
					on:mousemove={svgMoveExecute}
					on:mouseup={svgMoveEnd}
					style="height:{coords[i].heigth}px; width:{coords[i].width}px;top: {coords[i]
						.y}px; left: {coords[i].x}px;"
				>
					<input
						class="linkInput"
						placeholder="submit link here"
						bind:value={coords[i].link}
						type="text"
					/>
					<div
						class="circle"
						style="position:absolute;bottom:-5px; right:-5px;  overflow:visible"
						on:mousedown|stopPropagation={(e) => resizeStart(e, i)}
						on:mouseup={resizeEnd}
					/>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	* {
		font-family: 'Muli';
		background-color: rgb(226, 226, 226);
		user-select: none;
	}
	.dialogueFunctions {
		background-color: darkblue;
		height: 20%;
		width: 100%;
		margin-top: 43%;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
	}
	dialog {
		height: 100vh;
		width: auto;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: RGBA(1, 1, 1, 0.7);
	}
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
	.imageCanvasWrap {
		position: relative;
		height: fit-content;
		width: fit-content;
		align-self: center;
	}
	.linkInput {
		background-color: whitesmoke;
		border: 1px solid darkgrey;
		border-radius: 5px;
		height: 40%;
	}
	.pageWrapper {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}
	h1 {
		font-size: 40px;
		background-color: darkblue;
		border-radius: 10px;
		padding-inline: 10px;
		padding-bottom: 5px;
		text-align: center;
		width: 40%;
		margin-left: 27%;
		color: white;
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
	.fileName {
		background-color: whitesmoke;
		border-radius: 10px;
		margin-left: 27%;
		height: fit-content;
		padding-inline: 10px;
		width: fit-content;
	}
	img {
		border: solid darkblue 5px;
	}
	.areaRect {
		z-index: 1;
		position: absolute;
		border: darkgrey solid 2px;
		background-color: RGBA(255, 255, 255, 0.4);
		cursor: pointer;
		display: flex;
	}
	.circle {
		height: 7px;
		width: 7px;
		border-radius: 100%;
		border: solid 3px darkblue;
		background-color: whitesmoke;
	}
	.mapWrapper {
		height: 400px;
		width: 700px;
		border-radius: 20px;
	}
</style>
