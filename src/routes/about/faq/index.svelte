<script lang="ts">
	import faker from '@faker-js/faker';
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@rgossiaux/svelte-headlessui';
	import { slide } from 'svelte/transition';
	let text: {
		title: string;
		description: string;
	}[] = [
		{
			title: 'What is this?',
			description: 'Pi Phi Sigma is a non-profit organization that exists to support its members.'
		}
	];

	for (let i = 0; i < 10; i++) {
		text.push({
			title: faker.lorem.sentence(),
			description: faker.lorem.paragraph()
		});
	}
</script>

<div class="md:w-7/12 lg:6/12 relative w-10/12 py-20 mx-auto">
	{#each text as { title, description }}
		<Disclosure
			class="py-2 my-3 bg-orange-100 hover:border-orange-100 border-orange-200 border-2 px-2 rounded-md text-stone-900 shadow-sm"
			let:open
		>
			<DisclosureButton class="text-lg font-semibold text-stone-500">{title}</DisclosureButton>
			{#if open}
				<div transition:slide>
					<DisclosurePanel>{description}</DisclosurePanel>
				</div>
			{/if}
		</Disclosure>
	{/each}
</div>
