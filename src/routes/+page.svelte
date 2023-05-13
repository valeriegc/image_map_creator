<script>
	import Lock from '../icons/Lock.svelte';
	import UserIconSmall from '../icons/UserIconSmall.svelte';
</script>

<main>
	<div class="upperHalf" />
	<h1>IMAGE MAP</h1>
	<form method="POST">
		<h2>USER LOGIN</h2>
		<label>
			<div class="userIconContainer">
				<UserIconSmall />
			</div>
			<input name="email" type="email" placeholder="Username" />
		</label>
		<label style="margin-top:-20px;">
			<input name="password" type="password" placeholder="Password" />
			<div class="lockContainer">
				<Lock />
			</div>
		</label>
		<button class="loginButton">LOGIN</button>
		<div>
			<p>Forgot your credentials?</p>
			<p>Create an account</p>
		</div>
	</form>
</main>

<style>
	* {
		box-sizing: content-box;
	}
	main {
		height: 100vh;
		display: flex;
		flex-direction: column;
		background-image: linear-gradient(var(--navyblue), var(--lightbeige));
	}
	.upperHalf {
		height: 60vh;
		background-image: linear-gradient(var(--lightrose), var(--navyblue));
		position: absolute;
		width: 100%;
	}
	h1 {
		padding-top: 50px;
		font-size: 6rem;
		color: white;
		height: 100px;
		text-align: center;
		margin: 0;
		letter-spacing: 1.5rem;
		z-index: 2;
		margin-top: 3%;
	}
	form {
		display: flex;
		flex-direction: column;
		padding: 60px;
		height: 500px;
		width: 500px;
		align-items: center;
		border-radius: 20px;
		background-color: var(--navyblue);
		color: whitesmoke;
		gap: 40px;
		margin: auto;
		z-index: 1;
		margin-top: 6%;
	}
	h2 {
		font-weight: 900;
		font-size: 3rem;
		margin: 0;
	}
	label {
		font-size: 1rem;
		position: relative;
	}
	input {
		border-radius: 12px;
		border: none;
		background-color: rgba(255, 255, 255, 0.7);
		font-size: 1.5rem;
		padding: 10px;
	}
	input::placeholder {
		color: var(--navyblue);
		text-align: center;
	}

	.lockContainer {
		position: absolute;
		right: -8px;
		top: -8px;
	}
	.userIconContainer {
		position: absolute;
		left: -8px;
		top: -8px;
	}
	.loginButton {
		height: 60px;
		width: 240px;
		background-color: white;
		color: var(--navyblue);
		font-weight: bold;
		font-size: 1.5rem;
	}

	p {
		margin: 0;
		font-weight: bold;
		font-size: 1.5rem;
		text-align: center;
		margin-bottom: 10px;
	}
</style>
