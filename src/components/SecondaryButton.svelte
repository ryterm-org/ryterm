<script>
	let { label, link } = $props();
</script>

<a href={link}>
	{label}
</a>

<style>
	a {
		color: black;
		padding: 0.4rem;
		border: 1px solid #808080;
	}

	@media (prefers-color-scheme: dark) {
		a {
			color: white;
			background-color: #161616;
		}
	}
</style>
