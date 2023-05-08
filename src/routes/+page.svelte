<script>
	import Lock from '../icons/Lock.svelte';
	import UserIconSmall from '../icons/UserIconSmall.svelte';
</script>

<main>
	<div class="upperHalf" />
	<header>
		<h1>IMAGE MAP</h1>
	</header>
	<form method="POST">
		<h2>USER LOGIN</h2>
		<label>
			<div class="userIconContainer">
				<UserIconSmall />
			</div>
			<input name="email" type="email" placeholder="Username" />
		</label>
		<label>
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
	main {
		height: 100vh;
		display: flex;
		flex-direction: column;
	}
	.upperHalf {
		z-index: -1;
		height: 60vh;
		background-color: var(--lightrose);
		position: absolute;
		width: 100%;
	}
	h1 {
		padding-top: 50px;
		font-size: 6rem;
		color: var(--navyblue);
		height: 100px;
		text-align: center;
		margin: 0;
		letter-spacing: 1.5rem;
	}
	form {
		display: flex;
		flex-direction: column;
		padding: 60px;
		height: 500px;
		width: 500px;
		align-items: center;
		border-radius: 20px;
		background-color: #000099;
		color: whitesmoke;
		gap: 40px;
		margin: auto;
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
		color: #000099;
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
		width: 295px;
		background-color: white;
		color: var(--navyblue);
		font-weight: bold;
		font-size: 1rem;
	}

	p {
		margin: 0;
		font-weight: bold;
		font-size: 1.5rem;
		text-align: center;
		margin-bottom: 10px;
	}
</style>
