<script>
	import { goto } from '$app/navigation';
	import Contact from '../components/Contact.svelte';
	import CTA from '../components/CTA.svelte';
</script>

<div class="md:w-7/12 lg:6/12 relative w-10/12 py-20 mx-auto">
	<h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold py-8">Pi Phi Sigma</h1>
	<p>The newest international music charitable fraternity.</p>
</div>
<CTA
	title="Find out more about our benefits"
	button="please"
	action={() => {
		goto('./philanthropy');
	}}
/>

<Contact />
