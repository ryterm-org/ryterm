<script>
	import People from "@/components/People.svelte";
	import SecondaryButton from "@/components/SecondaryButton.svelte";
</script>

<svelte:head>
	<title>Ryterm - About us</title>
</svelte:head>

<section
	class="h-[80dvh] mt-20 w-full border-b border-b-neutral-300 dark:border-b-neutral-700 flex flex-col justify-center items-center"
>
	<div
		class="flex flex-col justify-center items-center w-xl gap-2 text-center"
	>
		<h1 class="text-3xl font-bold">
			Who <span class="font-black underline">we</span> are.
		</h1>
		<p>
			We’re not a company — we’re a community. United by <span
				class="font-bold underline">free</span
			>
			and <span class="font-bold underline">open-source</span> software. Real.
			Honest. Ours.
		</p>
	</div>
</section>
<section
	class="min-h-[80dvh] p-8 w-full border-b border-b-neutral-300 dark:border-b-neutral-700 flex flex-col justify-center items-center gap-8"
>
	<div
		class="flex flex-col justify-center items-center w-xl gap-2 text-center"
	>
		<h1 class="text-3xl font-bold">
			Our development <span class="font-black underline">team</span>.
		</h1>
		<p>
			This is the most important - and beautiful - peoples who contribute
			to this organization.
		</p>
	</div>
	<div class="flex gap-4 flex-wrap justify-center items-center">
		<People name={"Aury"} role={"Founder and BDFL, Full-Stack developer"}>
			{#snippet buttons()}
				<SecondaryButton
					label={"X/Twitter"}
					func={() => {
						window.location.href = "https://x.com/aury_dev";
					}}
					--width={"100%"}
				></SecondaryButton>
				<SecondaryButton
					label={"SourceHut"}
					func={() => {
						window.location.href = "https://git.sr.ht/~aury";
					}}
					--width={"100%"}
				></SecondaryButton>
			{/snippet}
		</People>
		<People name={"Alice"} role={"Co-founder, Back-end developer"}>
			{#snippet buttons()}
				<SecondaryButton
					label={"Instagram"}
					func={() => {
						window.location.href = "https://instagram.com/crowzz97";
					}}
					--width={"100%"}
				></SecondaryButton>
				<SecondaryButton
					label={"X/Twitter"}
					func={() => {
						window.location.href = "https://x.com/crowzz97";
					}}
					--width={"100%"}
				></SecondaryButton>
			{/snippet}
		</People>
		<People name={"Takasaki"} role={"Contributor, Mobile developer"}>
			{#snippet buttons()}
				<SecondaryButton
					label={"Github"}
					func={() => {
						window.location.href = "https://github.com/takasakiii";
					}}
					--width={"100%"}
				></SecondaryButton>
				<SecondaryButton
					label={"Discord (copy nick)"}
					func={() => {
						navigator.clipboard.writeText("takasaki.");
					}}
					--width={"100%"}
				></SecondaryButton>
			{/snippet}
		</People>
		<People name={"Ícaro"} role={"Contributor, Web developer"}>
			{#snippet buttons()}
				<SecondaryButton
					label={"Github"}
					func={() => {
						window.location.href = "https://github.com/icaroCodes";
					}}
					--width={"100%"}
				></SecondaryButton>
				<SecondaryButton
					label={"Youtube"}
					func={() => {
						window.location.href =
							"https://www.youtube.com/@icaroCodes";
					}}
					--width={"100%"}
				></SecondaryButton>
			{/snippet}
		</People>
		<People name={"Gabriel"} role={"Contributor, Back-end developer and System Architect"}>
			{#snippet buttons()}
				<SecondaryButton
					label={"X/Twitter"}
					func={() => {
						window.location.href = "https://x.com/HexxedBr";
					}}
					--width={"100%"}
				></SecondaryButton>
				<SecondaryButton
					label={"Instagram"}
					func={() => {
						window.location.href =
							"https://www.instagram.com/lock_hgabriel";
					}}
					--width={"100%"}
				></SecondaryButton>
			{/snippet}
		</People>
	</div>
</section>
