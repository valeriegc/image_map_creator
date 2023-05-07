<div class="pageWrap">
	<header>
		<h1>Image-map Generator</h1>
	</header>
	<div class="formBox">
		<p style="font-size: 14px; margin-bottom:10px;">Please input your email and password below:</p>
		<form method="POST" class="formWrap">
			<label>
				Email <input name="email" type="email" style="margin-left:37px" />
			</label>
			<label>
				Password <input name="password" type="password" style="margin-left:5px" />
			</label>
		</form>
		<button><a href="./generator" style="background:transparent;color:whitesmoke ">Login</a></button
		>
		<p style="margin-top:20px">Forgotten your credentials? Click here.</p>
		<p>Create a user account here</p>
	</div>
</div>

<style>
	label {
		font-size: 12px;
	}
	input {
		border-radius: 12.5px;
		margin-bottom: 20px;
	}
	p {
		font-weight: bold;
		font-size: 11px;
	}
	.pageWrap {
		background-color: lightgrey;
		width: 100%;
		height: 800px;
	}
	.formWrap {
		width: 250px;
		gap: 20px;
	}
	.formBox {
		display: flex;
		flex-direction: column;
		padding: 30px;
		height: 250px;
		width: 300px;
		align-items: center;
		margin-left: 450px;
		margin-top: 20px;
		border-radius: 20px;
	}
	button {
		height: 30px;
		width: 80px;
		background-color: #000099;
		color: whitesmoke;
		padding: 0;
	}
	header {
		display: flex;
		justify-content: center;
		z-index: 1;
	}
	h1 {
		margin-top: 50px;
		font-size: 50px;
		color: #000099;
		height: 100px;
	}
</style>
