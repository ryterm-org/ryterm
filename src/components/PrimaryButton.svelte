<script>
	let { label, link } = $props();
</script>

<a href={link}>
	{label}
</a>

<style>
	a {
		color: white;
		background-color: #0062cc;
		padding: 0.4rem;
		border: 1px solid #002954;
	}
</style>
