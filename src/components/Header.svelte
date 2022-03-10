<script lang="ts">
	import { Popover, PopoverButton, PopoverPanel } from '@rgossiaux/svelte-headlessui';
	import { createPopperActions } from 'svelte-popperjs';

	const [popperRef, popperContent] = createPopperActions();

	// Example Popper configuration
	const popperOptions = {
		placement: 'bottom-end',
		strategy: 'fixed',
		modifiers: [{ name: 'offset', options: { offset: [0, 10] } }]
	};
</script>

<header class="text-gray-600 body-font">
	<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
		<a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="./">
			<img src="static/PFS PNG Small.png" alt="PFS Logo" class="w-10" />
			<span class="ml-3 text-xl">Pi Phi Sigma</span>
		</a>
		<nav class="md:ml-auto flex flex-wrap items-center justify-center text-sm sm:text-base">
			<Popover>
				<PopoverButton use={[popperRef]}>Solutions</PopoverButton>
				<PopoverPanel use={[[popperContent, popperOptions]]}>
					<a class="mr-5 hover:text-gray-900" href="/about" sveltekit:prefetch>About</a>
					<a class="mr-5 hover:text-gray-900" href="/chapters" sveltekit:prefetch>Chapters</a>
					<a class="mr-5 hover:text-gray-900" href="/philanthropy" sveltekit:prefetch
						>Philanthropy</a
					>
					<a class="mr-5 hover:text-gray-900" href="/resources" sveltekit:prefetch>Resources</a>
				</PopoverPanel>
			</Popover>
		</nav>
		<button
			href="./membership"
			class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
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
