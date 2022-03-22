<script lang="ts">
	import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@rgossiaux/svelte-headlessui';
	import { createPopperActions } from 'svelte-popperjs';
	import { fly } from 'svelte/transition';
	const [popperRef, popperContent] = createPopperActions();
	// Example Popper configuration
	const popperOptions = {
		placement: 'bottom-end',
		strategy: 'fixed',
		modifiers: [{ name: 'offset', options: { offset: [0, 10] } }]
	};
	let open;
	let urls = {
		About: '/about',
		FAQ: '/about/faq',
		PFS: '/about/pfs',
		'Pi-Phi-Sigma': '/about/pi-phi-sigma',
		'The Team': '/about/team'
	};
</script>

<header class="body-font text-gray-600">
	<div class="md:flex-row container flex flex-col flex-wrap items-center p-5 mx-auto">
		<a class="title-font md:mb-0 flex items-center mb-4 font-medium text-gray-900" href="./">
			<img src="static/PFS PNG Small.png" alt="PFS Logo" class="w-10" />
			<span class="ml-3 text-xl">Pi Phi Sigma</span>
		</a>
		<nav class="md:ml-auto sm:text-base flex flex-wrap items-center justify-center text-sm">
			<PopoverGroup>
				<Popover let:open>
					<PopoverButton class="" use={[popperRef]}>About</PopoverButton>
					{#if open}
						<div class="" transition:fly>
							<PopoverPanel
								static
								use={[[popperContent, popperOptions]]}
								class="bg-stone-100 p-2 rounded"
							>
								{#each Object.entries(urls) as [key, value]}
									<a
										class="hover:bg-gray-200 hover:text-gray-900 block p-2 text-sm text-gray-900"
										href={value}
										sveltekit:prefetch>{key}</a
									>
								{/each}
							</PopoverPanel>
						</div>
					{/if}
				</Popover>
			</PopoverGroup>
		</nav>
		<button
			href="./membership"
			class="focus:outline-none hover:bg-gray-200 md:mt-0 inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-100 border-0 rounded"
			>Join Now
			<svg
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				class="w-4 h-4 ml-1"
				viewBox="0 0 24 24"
			>
				<path d="M5 12h14M12 5l7 7-7 7" />
			</svg>
		</button>
	</div>
</header>
