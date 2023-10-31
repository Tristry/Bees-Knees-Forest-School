<script lang="ts">
	import { POLICIES } from "../../data/policies";
</script>

<section class="container min-h-[514px] py-3">
	<h1 class="text-3xl leading-[50px] max-md:text-2xl">Policies</h1>
	<div class="grid grid-cols-3 max-md:grid-cols-1 gap-3 mt-3">
		{#each POLICIES as policy}
			<a href={policy.link}>
				<div class="w-full max-md:text-sm flex items-center justify-between hover:border-[#054900] border-2 border-transparent transition-all h-full p-4 bg-[#BFFFBA] text-[#054900] rounded-lg">
					{policy.title}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24px"
						viewBox="0 0 24 24"
						fill="none"
						 class="min-w-[24px]"
					>
						<g id="Interface / External_Link">
							<path
								id="Vector"
								d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
								stroke="#054900"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</g>
					</svg>
				</div>
			</a>
		{/each}
	</div>
</section>
