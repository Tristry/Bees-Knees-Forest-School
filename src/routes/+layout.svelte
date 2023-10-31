<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.postcss';
</script>

<svelte:head>
    <title>Bee's Knees Forest School</title> 
</svelte:head>
<Header />
<div class="mt-16 min-h-[calc(100vh-64px-377px)]">
	<slot />
</div>
<Footer />
