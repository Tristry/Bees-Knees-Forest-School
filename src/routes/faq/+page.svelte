<script>

	import Accordian from "$lib/components/Accordian.svelte";
	import { FAQ } from '../../data/faq';

</script>


<section id="faq" class="pt-6 container h-full space-y-16">
	<h2
		class="max-md:text-2xl max-md:leading-[35px] text-3xl leading-[50px] text-[#CF572B] font-semibold my-8 text-center"
	>
		Frequently Asked Questions
	</h2>
	<div class="grid grid-cols-2 max-md:grid-cols-1 h-full gap-5">
		{#each FAQ as faq}
			<Accordian title={faq.question} content={faq.answer} />
		{/each}
	</div>
</section>
