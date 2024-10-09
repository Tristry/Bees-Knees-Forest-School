<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.postcss';
</script>

<Header />
<div class="mt-16 min-h-[calc(100vh-64px-377px)] space-y-16">
	<slot />
</div>
<Footer />
