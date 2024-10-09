<script>
	import Button from '$lib/components/Button.svelte';
	import FeaturesCard from '$lib/components/FeaturesCard.svelte';
	import Accordian from '$lib/components/Accordian.svelte';
	import Input from '$lib/components/ui/Input/Input.svelte';
	const features = [
		{
			name: 'Risk Assessment',
			description:
				'We encourage kids to make their own risk assessments with minimal adult interference which allows children the space and time to develop natural problem solving skills. We foster a sense of responsibility and judgement that can benefit them in various aspects of life.',
			image: '/home/Risk Assessment.jpg'
		},
		{
			name: 'Curiosity and Learning',
			description:
				'By nurturing curiosity, our clubs help children become curious learners for life, promoting a thirst for knowledge that goes beyond the classroom.',
			image: '/home/Curiosity and Learning.jpg'
		},
		{
			name: 'Physical Development',
			description:
				'Our clubs support the development of stronger physical abilities in children through outdoor activities, promoting health and well-being.',
			image: '/home/Physical Development.jpg'
		},
		{
			name: 'Emotional Resilience',
			description:
				'The outdoor setting allows children to develop emotional resilience by navigating the challenges and uncertainties of the natural world, helping them build inner strength.',
			image: '/home/Emotional Resiliance.jpg'
		},

		{
			name: 'Effective Communication',
			description:
				'Children attending our clubs become more effective communicators as they learn to express themselves in a diverse and interactive outdoor environment, improving their social skills.',
			image: '/home/Effective Communication.jpg'
		},
		{
			name: 'Self-Confidence',
			description:
				'Participation in our clubs can boost a childs self-confidence, as they conquer outdoor challenges and gain a sense of accomplishment.',
			image: '/home/Self Confidence.jpg'
		},
		{
			name: 'Sensory Learning',
			description:
				'Our approach and clubs engage childrens senses - research has proven that information acquired through the use of all our senses leads to knowledge being ingrained rather than simply retained for a short period of time.',
			image: '/home/Sensory Learning.jpg'
		},
		{
			name: 'Learning Through Play',
			description:
				'Our approach emphasises learning through play, which helps children engage with their environment in a fun and meaningful way, promoting a positive attitude toward learning in all stages of life',
			image: '/home/Learning Through Play.jpg'
		}
	];
</script>

<section class="h-[80vh] relative overflow-hidden z-0">
	<div class="w-full h-full overflow-hidden">
		<img srcset="https://res.cloudinary.com/dk8kuqbbc/image/upload/f_auto/q_auto/v1698688020/Home%20page%20banner.webp 1024w,
			https://res.cloudinary.com/dk8kuqbbc/image/upload/w_650,h_364/f_auto/q_auto/v1698688020/Home%20page%20banner.webp 640w,
			https://res.cloudinary.com/dk8kuqbbc/image/upload/w_320,h_179/f_auto/q_auto/v1698688020/Home%20page%20banner.webp  320w" src="https://res.cloudinary.com/dk8kuqbbc/image/upload/f_auto/q_auto/v1698688020/Home%20page%20banner.webp" alt="banner" class="w-full h-full object-cover">
		<div class="absolute top-0 z-10 bg-black/50 h-[100vh] w-full transition-all" />
	</div>
	<div class="w-full h-full flex items-center absolute top-0 text-white z-10">
		<div class="container ml-auto flex flex-col gap-7">
			<h1 class="max-md:text-3xl text-5xl font-bold leading-[50px] -mb-3 text-center">
				Rooted in Fun, Growing in Nature
			</h1>
			<p class="max-md:w-full w-3/5 leading-7 opacity-90 text-center mx-auto">
				The Bee's Knees Forest School - providing immersive outdoor learning experiences that
				empower children to discover, explore, and learn in the heart of nature, fostering
				creativity, resilience, and a lifelong love for the environment.
			</p>
		</div>
	</div>
</section>
<section class="container h-full space-y-16">
	<h2
		class="max-md:text-2xl max-md:leading-[35px] text-3xl leading-[50px] my-8 text-center text-[#CF572B] font-semibold"
	>
		Why our clubs are the Bee's Knees
	</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full gap-5">
		{#each features as feature}
			<FeaturesCard title={feature.name} description={feature.description} image={feature.image} />
		{/each}
	</div>
	<div class="w-full mt-8 flex justify-center">
		<a href="/clubs">
			<Button variant="RED" classname="font-semibold">See Our Clubs</Button>
		</a>
	</div>
</section>

<section class="mt-12 container">
	<div
		class="bg-[#DAE69F] flex flex-col justify-center w-full rounded-xl h-[300px] max-md:h-fit text-center"
	>
		<div
			class="w-[70%] max-md:w-[100%] max-md:px-4 max-md:py-10
		mx-auto space-y-6"
		>
			<h2 class="max-md:text-2xl text-3xl text-[#374b35]">
				Subscribe to Bee's Knees Forest School
			</h2>
			<p class="max-md:text-sm opacity-80 leading-6">
				Join the hive! Sign up for our nature-loving newsletter and stay in the loop with all things wild and wonderful at Bee's Knees Forest School!
			</p>
			<div class="flex gap-4 max-md:flex-col max-md:gap-2">
				<Input class="border-[#374b35]" placeholder="Enter your email" />
				<Button variant="PRIMARY">Subscribe</Button>
			</div>
		</div>
	</div>
</section>
