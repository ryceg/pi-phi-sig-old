<script>
	import { goto } from '$app/navigation';
	import Contact from '../components/Contact.svelte';
	import CTA from '../components/CTA.svelte';
</script>

<div class="md:w-7/12 lg:6/12 relative w-10/12 py-20 mx-auto">
	<h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold py-8">Pi Phi Sigma</h1>
	<q class="font-light py-8 my-12">The newest international music charitable fraternity.</q>
	<p class="font-serif py-12">
		Pi Phi Sigma, inc. is a startup Greek letter foundation for philanthropic and professional
		support, created by and for musicians and music students. We are organizing as a Delaware
		non-stock corporation, pending certification as a 501(c)(3) nonprofit
	</p>
</div>
<CTA
	title="Find out more about our benefits"
	button="please"
	action={() => {
		goto('./philanthropy');
	}}
/>

<Contact />
