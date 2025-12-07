<script>
	import People from "@/components/People.svelte";
	import SecondaryButton from "@/components/SecondaryButton.svelte";
</script>

<svelte:head>
	<title>Ryterm/About</title>
</svelte:head>

<main>
	<div>
		<h1>
			Who we are.
		</h1>
		<p>
			We’re not a company — we’re a community. United by free and open-source software. Real. Honest. Ours.
		</p>
	</div>
	<div>
		<h1>
			Our development team.
		</h1>
		<p>
			This is the most important - and beautiful - peoples who contribute
			to this organization.
		</p>
	</div>
	<div class="peoples">
		<People name="Aury" desc="Founder and BDFL, Full-Stack developer">
			{#snippet buttons()}
				<SecondaryButton
					label="SourceHut"
					link="https://git.sr.ht/~aury"
				></SecondaryButton>
			{/snippet}
		</People>
		<People name="Alice" desc="Co-founder, Back-end developer">
			{#snippet buttons()}
				<SecondaryButton
					label="Instagram"
					link="https://instagram.com/crowzz97"
				></SecondaryButton>
				<SecondaryButton
					label="X/Twitter"
					link="https://x.com/crowzz97"
				></SecondaryButton>
			{/snippet}
		</People>
		<People name="Takasaki" desc="Contributor, Mobile developer">
			{#snippet buttons()}
				<SecondaryButton
					label="Github"
					link="https://github.com/takasakiii"
				></SecondaryButton>
				<SecondaryButton
					label="Discord (@takasaki.)"
					link="https://discord.com"
				></SecondaryButton>
			{/snippet}
		</People>
		<People name="Gabriel" desc="Contributor, Back-end developer and System Architect">
			{#snippet buttons()}
				<SecondaryButton
					label="X/Twitter"
					link="https://x.com/HexxedBR"
				></SecondaryButton>
				<SecondaryButton
					label="Instagram"
					link="https://instagram/lock_hgabriel"
				></SecondaryButton>
			{/snippet}
		</People>
	</div>
	<div class="communication">
		<h2>
			Our IRC channel on libera.chat
		</h2>
		<SecondaryButton
			label="#ryterm"
			link="irc://irc.libera.chat/#ryterm"
		></SecondaryButton>
		<h2>
			Our email
		</h2>
		<SecondaryButton
			label="aury@ryterm.xyz"
			link="mailto:aury@ryterm.xyz"
		></SecondaryButton>
	</div>
</main>

<style>
	.communication {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.peoples {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
</style>
