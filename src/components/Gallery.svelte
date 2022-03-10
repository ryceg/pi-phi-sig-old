<script lang="ts">
	export let title: string;
	export let description: string;
	export let images: {
		src: string;
		alt: string;
	}[];
</script>

<section class="text-gray-600 body-font">
	<div class="container px-5 py-24 mx-auto flex flex-wrap">
		<div class="flex w-full mb-20 flex-wrap">
			<h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
				{title || 'Impressive Title'}
			</h1>
			<p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
				{description || 'The description goes here!'}
			</p>
		</div>
		<div class="flex flex-wrap md:-m-2 -m-1">
			<div class="flex flex-wrap w-1/2">
				<div class="md:p-2 p-1 w-1/2">
					{#each images as image}
						<img
							alt={image.alt || 'gallery'}
							class="w-full object-cover h-full object-center block"
							src={image.src || 'https://dummyimage.com/500x300'}
						/>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
