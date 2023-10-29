<script>
	import Button from '$lib/components/Button.svelte';
	import { professionals } from '../../data/professionals';
	import { showTestimonials, testimonials } from '../../data/testimonials';
</script>

<section id="about" class="container pt-4 overflow-hidden h-full">
	<div class="flex gap-6 h-full max-md:flex-col">
		<div class="w-full max-md:w-full h-full flex flex-col gap-5">
			<div>
				<h1
					class="max-md:leading-[35px] text-center max-md:text-2xl text-3xl leading-[50px] text-[#CF572B] font-semibold mb-3"
				>
					A little about Bee's Knees Forest School
				</h1>
				<div class="space-y-2">
					<p class="mt-1 max-md:text-sm text-base text-muted-foreground leading-8">
						At The Bee's Knees Forest School, our mission is to rekindle the unbreakable bond
						between children and nature, empowering them to learn from the world's greatest teacher
						- the great outdoors. We believe in nurturing young minds by cultivating a sense of
						wonder and curiosity, encouraging children to educate themselves in a way that is free,
						independent, and uninfluenced, teaching them not what to think, but how to think. <br />
						Our Forest School is a place where fun and organic learning come together, providing an environment
						where children can play, explore, and grow in harmony with the natural world. We are committed
						to helping children reap the profound benefits that outdoor experiences offer, cultivating
						essential life skills and emotional resilience that are increasingly vital in a world marked
						by growing mental health challenges among our youth. <br /> The Bee's Knees Forest School
						is dedicated to creating a space where children can thrive and flourish, unburdened by the
						constraints of modern life, and where they can develop a deep appreciation for the wonders
						of nature. Through this mission, we aim to equip the next generation with the tools they
						need to navigate life's challenges and uncertainties with grace, strength, and an enduring
						connection to the world around them.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="team" class="container h-fit scroll-mt-16 block">
	<h2
		class="max-md:leading-[36px] text-center max-md:w-full max-md:text-2xl text-3xl leading-[50px] text-[#CF572B] font-semibold my-8"
	>
		Our team of professionals
	</h2>
	<div class="space-y-6">
		{#each professionals as professional, index}
			<div
				class={`flex gap-4 max-md:flex-col-reverse h-full  ${
					index % 2 != 0 ? 'md:flex-row-reverse' : ''
				}`}
			>
				<div
					class="p-8 w-4/5 h-fit max-md:w-full max-md:p-3 rounded-xl flex flex-col justify-between"
					style={`background-color: ${professional.secondaryColor};`}
				>
					<div
						class="max-md:flex hidden max-md:mb-4 w-1/4 max-md:w-full max-md:h-[200px] h-auto rounded-xl overflow-hidden"
					>
						<img src={professional.image} alt="" class="w-full h-full object-cover" />
					</div>
					<div class="space-y-2 h-fit">
						<h1
							class="max-md:text-2xl max-md:leading-[34px] text-2xl leading-[42px]"
							style={`color: ${professional.primaryColor};`}
						>
							{professional.name}
						</h1>
						<p
							class="leading-7 opacity-90 max-md:text-sm max-md:leading-6"
							style={`color: ${professional.primaryColor};`}
						>
							{@html professional.description}
						</p>
					</div>
				</div>
				<div class="max-md:hidden rounded-xl w-1/5 overflow-hidden">
					<img src={professional.image} alt="" class="w-full h-full object-cover" />
				</div>
			</div>
		{/each}
	</div>
</section>

{#if showTestimonials}
	<section id="testimonials" class="container">
		<h2
			class="max-md:leading-[36px] max-md:w-full max-md:text-2xl text-3xl leading-[50px] text-[#CF572B] font-semibold my-8 text-center"
		>
			Testimonials
		</h2>
		<div class="space-y-5">
			{#each testimonials as testimonial}
				<div class="bg-[#ffe6dd] p-5 rounded-xl flex gap-5 max-md:flex-col max-md:gap-2">
					<div class="w-14 h-14 rounded-full overflow-hidden">
						<img src={testimonial.image} alt="" class="object-cover w-full h-full" />
					</div>
					<div class="w-fit">
						<div>
							<img src="" alt="" />
						</div>
						<p class="text-[#442921] text-lg">{testimonial.name}</p>
						<div class="flex gap-1 items-center">
							{#each Array.from({ length: Math.floor(testimonial.rating) }) as _}
								<svg
									width="15"
									height="15"
									viewBox="0 0 26 26"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M15.2459 1.87743L17.5337 6.49074C17.8457 7.13295 18.6776 7.74892 19.3795 7.86687L23.526 8.56149C26.1777 9.00709 26.8016 10.9468 24.8909 12.8602L21.6672 16.1105C21.1213 16.661 20.8223 17.7226 20.9913 18.4827L21.9142 22.5062C22.6421 25.691 20.9653 26.923 18.1706 25.2585L14.2841 22.9387C13.5821 22.5194 12.4253 22.5194 11.7103 22.9387L7.82374 25.2585C5.04205 26.923 3.35224 25.6779 4.08015 22.5062L5.00305 18.4827C5.17203 17.7226 4.87307 16.661 4.32713 16.1105L1.10349 12.8602C-0.794299 10.9468 -0.183367 9.00709 2.46834 8.56149L6.61487 7.86687C7.30379 7.74892 8.1357 7.13295 8.44767 6.49074L10.7354 1.87743C11.9833 -0.625811 14.0111 -0.625811 15.2459 1.87743Z"
										fill="#FF8A00"
									/>
								</svg>
							{/each}
							<p class="text-sm">({testimonial.rating} stars)</p>
						</div>
						<p class="mt-3 leading-6 max-md:text-sm max-md:leading-7">
							{testimonial.review}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</section>
{/if}
