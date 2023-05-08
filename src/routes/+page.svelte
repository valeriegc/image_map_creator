<div class="pageWrap">
	<header>
		<h1>Image-map Generator</h1>
	</header>
	<div class="formBox">
		<p class="loginTitle">USER LOGIN</p>
		<form method="POST" class="formWrap">
			<div class="userIcon">
				<div class="userProfileHead" />
				<div class="userProfileBody" />
			</div>
			<div class="lockIcon">
				<div class="lockIconBox" />
				<div class="lockIconCircle" />
				<div class="lockIconHalfCircle" />
			</div>
			<label>
				<input name="email" type="email" placeholder="Username" />
			</label>
			<label>
				<input name="password" type="password" placeholder="Password" />
			</label>
		</form>
		<button class="loginButton">LOGIN</button>
		<p>Forgot your credentials?</p>
		<p>Create an account</p>
	</div>
</div>

<style>
	.userProfileBody {
		height: 40px;
		width: 50px;
		position: absolute;
		top: 22px;
		border-radius: 100%;
		left: -6px;
		background-color: whitesmoke;
	}
	.userProfileHead {
		height: 15px;
		width: 15px;
		background-color: white;
		border-radius: 100%;
		position: absolute;
		right: 10px;
		top: 6px;
	}
	::placeholder {
		color: #000099;
		padding-left: 20%;
	}
	.lockIcon {
		position: absolute;
		border: solid white 1.5px;
		background-color: #000099;
		border-radius: 100%;
		height: 35px;
		width: 35px;
		left: 62%;
		top: 50%;
	}
	.lockIconBox {
		height: 10px;
		width: 15px;
		border: white solid 2px;
		position: absolute;
		top: 45%;
		left: 24%;
		border-bottom-left-radius: 20%;
		border-bottom-right-radius: 20%;
		z-index: 2;
		background-color: #000099;
	}
	.lockIconCircle {
		height: 3.5px;
		width: 3.5px;
		border: white solid 2px;
		position: absolute;
		top: 45%;
		left: 24%;
		border-bottom-left-radius: 20%;
		border-bottom-right-radius: 20%;
		border-radius: 100%;
		top: 55%;
		left: 40%;
		z-index: 3;
		background-color: #000099;
	}
	.lockIconHalfCircle {
		height: 10px;
		width: 10px;
		border: white solid 1.5px;
		position: absolute;
		top: 25%;
		left: 32%;
		border-bottom-left-radius: 20%;
		border-bottom-right-radius: 20%;
		border-radius: 100%;
		z-index: 1;
	}

	.userIcon {
		position: absolute;
		border: solid white 1.5px;
		left: 29%;
		height: 35px;
		width: 35px;
		border-radius: 100%;
		top: -8%;
		background-color: #000099;
		overflow: hidden;
	}
	.loginTitle {
		font-weight: 900;
		font-size: 1.5rem;
		padding: 0;
		margin: 0;
	}
	label {
		font-size: 1rem;
		margin-left: 4%;
		margin-bottom: 3%;
	}
	input {
		border-radius: 12.5px;
		margin-bottom: 20px;
		height: 30%;
		border: none;
		background-color: rgba(255, 255, 255, 0.7);
	}
	p {
		font-weight: bold;
		font-size: 11px;
	}
	.pageWrap {
		width: 100%;
		height: 800px;
	}
	.formWrap {
		width: 100%;
		gap: 20px;
		margin-top: 10%;
		background-color: transparent;
		position: relative;
		justify-content: center;
		padding-left: 40%;
	}
	.formBox {
		display: flex;
		flex-direction: column;
		padding-top: 2%;
		padding-bottom: 1%;
		height: 250px;
		width: 300px;
		align-items: center;
		margin-left: 39%;
		border-radius: 20px;
		background-color: #000099;
		align-self: center;
		justify-self: center;
		color: whitesmoke;
	}
	.loginButton {
		height: 50px;
		width: 160px;
		background-color: whitesmoke;
		color: #000099;
		font-weight: bold;
		margin-top: 4%;
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
