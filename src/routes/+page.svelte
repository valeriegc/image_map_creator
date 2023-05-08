<script>
	import Lock from '../icons/Lock.svelte';
	import UserIconSmall from '../icons/UserIconSmall.svelte';
</script>

<div class="pageWrap">
	<header>
		<h1>Image-map Generator</h1>
	</header>
	<div class="formBox">
		<p class="loginTitle">USER LOGIN</p>
		<form method="POST" class="formWrap">
			<Lock />
			<UserIconSmall />
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
	::placeholder {
		color: #000099;
		padding-left: 20%;
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
