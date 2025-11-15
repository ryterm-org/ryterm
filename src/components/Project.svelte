<script>
	let { name, desc, buttons } = $props();
</script>

<div class="project">
	<div>
		<h2>{name}</h2>
		<p>{desc}</p>
	</div>
	<div>
		{@render buttons?.()}
	</div>
</div>

<style>
	.project {
		width: auto;
		padding: 5px;
		border: 1px solid #808080;
	}
</style>
