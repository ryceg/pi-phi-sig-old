<script lang="ts">
	export let title: string;
	export let button: string;
	export let action;
	import faker from '@faker-js/faker';
</script>

<section class="text-gray-600 body-font">
	<div class="container px-5 py-24 mx-auto">
		<div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
			<h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
				{title || faker.lorem.sentence()}
			</h1>
			<button
				on:click={() => {
					action();
				}}
				class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
				>{button || faker.animal.bear()}</button
			>
		</div>
	</div>
</section>
