<script lang="ts">
	import PrimaryButton from "./PrimaryButton.svelte";
	import SecondaryButton from "./SecondaryButton.svelte";
	const { title } = $props();
	let showItems = $state(false);
</script>

<header class="fixed top-0 left-0 w-screen flex justify-center items-center">
	<div
		class="flex justify-evenly items-center bg-white/30 dark:bg-neutral-950/30 border border-neutral-300 dark:border-neutral-700 rounded-xl w-full m-2 h-16 backdrop-blur-xl responsible-navbar"
	>
		<div class="font-bold text-2xl">
			{title}
		</div>
		<div
			class="flex justify-center items-center gap-2"
			class:show-items={showItems}
		>
			<SecondaryButton
				label={"Home"}
				func={() => {
					window.location.href = "/";
				}}
			></SecondaryButton>
			<SecondaryButton
				label={"Projects"}
				func={() => {
					window.location.href = "/projects";
				}}
			></SecondaryButton>
			<SecondaryButton
				label={"Who we are"}
				func={() => {
					window.location.href = "/about";
				}}
			></SecondaryButton>
			<SecondaryButton
				label={"Github"}
				func={() => {
					window.location.href = "https://github.com/ryterm-org";
				}}
			></SecondaryButton>
			<PrimaryButton
				label={"Support us"}
				func={() => {
					window.location.href =
						"https://www.patreon.com/15004923/join";
				}}
			></PrimaryButton>
		</div>
		<SecondaryButton
			label="☰"
			func={() => {
				showItems = !showItems;
			}}
		/>
	</div>
</header>

<style>
	@media (max-width: 800px) {
		.responsible-navbar {
			justify-content: space-between !important;
			padding: 0 1.2rem;
		}
	}

	@media (max-width: 640px) {
		.responsible-navbar {
			position: relative;

			div:nth-of-type(2) {
				display: none;
				position: absolute;
				top: 4.5rem;
				left: 0;
				width: 100%;
				background-color: black;
				border: 1px solid var(--color-neutral-700);
				border-radius: var(--radius-xl);
				padding: 1rem;
				flex-direction: column;
				& :global(button) {
					width: 100%;
				}
			}

			& > :global(button) {
				display: block !important;
			}
		}
	}

	.show-items {
		display: flex !important;
	}

	.responsible-navbar > :global(button) {
		display: none;
	}
</style>
