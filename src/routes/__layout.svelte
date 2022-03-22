<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import Header from '../../src/components/Header.svelte';
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	let load = false;
	onMount(() => {
		load = true;
	});
</script>

<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
<Header />
{#if load}
	<div
		in:fly={{
			x: -300,
			duration: 600,
			delay: 600
		}}
		out:fly={{
			x: 300,
			duration: 600
		}}
	>
		<slot />
	</div>
{/if}
<!-- </div> -->
<Footer />
