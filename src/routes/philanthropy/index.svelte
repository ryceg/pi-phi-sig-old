<script lang="ts">
	import { goto } from '$app/navigation';
	import faker from '@faker-js/faker';
	import CTA from '../../components/CTA.svelte';
</script>

<div class="md:w-7/12 lg:6/12 relative w-10/12 py-20 mx-auto">
	<h1 class="font-bold text-2xl py-8">Mission Statement</h1>
	{faker.lorem.paragraphs()}
	<h1 class="font-bold text-2xl py-8">Vision Statement</h1>
	{faker.lorem.paragraphs()}
</div>

<CTA
	title="Support musicians in need."
	button="Donate now"
	action={() => {
		goto('./philanthropy/donate');
	}}
/>
