<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	const principles = [
		{
			title: 'Regular Sessions',
			description:
				'Forest School is a long-term process of regular sessions, rather than one-off or infrequent visits; the cycle of planning, observation, adaptation and review links each session.',
			svg: `<svg width="22" height="51" viewBox="0 0 35 51" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path opacity="0.4" d="M34.3481 45.084C32.8892 48.6795 29.3348 51 25.3294 51H9.67939C5.64753 51 2.11965 48.6795 0.660751 45.084C-0.798147 41.463 0.20982 37.4595 3.18067 34.8585L13.9235 25.5H21.1119L31.8281 34.8585C34.799 37.4595 35.7804 41.463 34.3481 45.084Z" fill="#CF572B"/>
					<path d="M22.333 41.1571H12.6778C11.6698 41.1571 10.874 40.3666 10.874 39.4231C10.874 38.4541 11.6963 37.6891 12.6778 37.6891H22.333C23.341 37.6891 24.1367 38.4796 24.1367 39.4231C24.1367 40.3666 23.3144 41.1571 22.333 41.1571Z" fill="#CF572B"/>
					<path d="M34.351 5.916C32.8922 2.3205 29.3377 0 25.3324 0H9.68254C5.67721 0 2.1228 2.3205 0.663903 5.916C-0.76847 9.537 0.212971 13.5405 3.21034 16.1415L13.9265 25.5H21.1149L31.8311 16.1415C34.802 13.5405 35.7834 9.537 34.351 5.916ZM22.335 13.3365H12.6798C11.672 13.3365 10.8762 12.546 10.8762 11.6025C10.8762 10.659 11.6985 9.8685 12.6798 9.8685H22.335C23.343 9.8685 24.1388 10.659 24.1388 11.6025C24.1388 12.546 23.3165 13.3365 22.335 13.3365Z" fill="#CF572B"/>
					</svg>
				`
		},
		{
			title: 'Natural Environment',
			description:
				'Forest School takes place in a woodland or natural environment to support the development of a lifelong relationship between the learner and the natural world.',
			svg: `<svg width="22" height="51" viewBox="0 0 36 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M28.2073 19.8927H7.58201C4.66382 19.8927 3.6499 17.9561 5.3563 15.6028L15.669 1.28695C16.8808 -0.428985 18.9085 -0.428985 20.1202 1.28695L30.4331 15.6028C32.1395 17.9561 31.1255 19.8927 28.2073 19.8927Z" fill="#CF572B"/>
<path d="M31.719 39.3565H4.07045C0.163043 39.3565 -1.1724 36.7826 1.12753 33.6449L10.9949 19.8928H24.7945L34.6619 33.6449C36.9619 36.7826 35.6264 39.3565 31.719 39.3565Z" fill="#CF572B"/>
<path d="M19.7496 39.3561V49.1615C19.7496 50.1666 18.9088 51 17.8948 51C16.8809 51 16.04 50.1666 16.04 49.1615V39.3561H19.7496Z" fill="#CF572B"/>
</svg>
				`
		},
		{
			title: 'Learner Centered',
			description:
				'Forest School aims to promote the holistic development of all involved, fostering resilient, confident, independent and creative learners.',
			svg: `<svg width="22" height="42" viewBox="0 0 39 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M19.5 5.93428V42C19.8315 42 20.1825 41.9325 20.4555 41.7525L20.5335 41.7075C24.2775 39.3451 30.81 36.8703 35.0415 36.2178L35.607 36.1278C37.479 35.8578 39 33.8329 39 31.673V4.49433C39 1.81697 37.1085 -0.207909 34.788 0.0170795C30.693 0.39956 24.492 2.78451 21.021 5.28188L20.5335 5.61928C20.241 5.82177 19.8705 5.93428 19.5 5.93428Z" fill="#CF572B"/>
<path d="M0 4.51653V31.6726C0 33.8325 1.52098 35.8574 3.39298 36.1274L4.03652 36.2174C8.28752 36.8699 14.8396 39.3672 18.5835 41.7521C18.837 41.9321 19.149 41.9998 19.5 41.9998V5.93396C19.1295 5.93396 18.759 5.82145 18.4665 5.61896L18.135 5.37149C14.664 2.85162 8.44346 0.444261 4.34846 0.0392809H4.23146C1.91096 -0.185708 0 1.81667 0 4.51653Z" fill="#CF572B"/>
<path d="M33.1496 0.264771V9.91674C33.1496 10.8167 32.2916 11.3566 31.6286 10.8616L29.2496 9.03926L26.8706 10.8616C26.2271 11.3566 25.3496 10.8167 25.3496 9.91674V2.82955C27.9041 1.65961 30.7511 0.714748 33.1496 0.264771Z" fill="#CF572B"/>
</svg>

			`
		},
		{
			title: 'Risk Management',
			description:
				'Forest School offers learners the opportunity to take supported risks appropriate to the environment and to themselves.',
			svg: `<svg width="22" height="41" viewBox="0 0 43 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M41.5998 29.0739L28.4196 5.01274C26.6485 1.77534 24.1978 0 21.5 0C18.8022 0 16.3515 1.77534 14.5804 5.01274L1.40023 29.0739C-0.267889 32.1442 -0.453235 35.0891 0.885375 37.4075C2.22399 39.7259 4.86002 41 8.31981 41H34.6802C38.14 41 40.776 39.7259 42.1146 37.4075C43.4532 35.0891 43.2679 32.1233 41.5998 29.0739Z" fill="#CF572B"/>
<path d="M21.4987 26.6301C20.6543 26.6301 19.9541 25.92 19.9541 25.0636V14.6204C19.9541 13.7641 20.6543 13.054 21.4987 13.054C22.343 13.054 23.0432 13.7641 23.0432 14.6204V25.0636C23.0432 25.92 22.343 26.6301 21.4987 26.6301Z" fill="#CF572B"/>
<path d="M21.4989 33.4183C21.3753 33.4183 21.2311 33.3975 21.087 33.3766C20.9634 33.3557 20.8398 33.3139 20.7163 33.2512C20.5927 33.2095 20.4692 33.1468 20.3456 33.0633C20.2426 32.9797 20.1396 32.8962 20.0367 32.8126C19.666 32.4158 19.4395 31.8727 19.4395 31.3297C19.4395 30.7867 19.666 30.2436 20.0367 29.8468C20.1396 29.7632 20.2426 29.6797 20.3456 29.5961C20.4692 29.5126 20.5927 29.4499 20.7163 29.4082C20.8398 29.3455 20.9634 29.3037 21.087 29.2828C21.3547 29.2202 21.643 29.2202 21.8901 29.2828C22.0343 29.3037 22.1579 29.3455 22.2814 29.4082C22.405 29.4499 22.5286 29.5126 22.6521 29.5961L22.961 29.8468C23.3317 30.2436 23.5583 30.7867 23.5583 31.3297C23.5583 31.8727 23.3317 32.4158 22.961 32.8126C22.8581 32.8962 22.7551 32.9797 22.6521 33.0633C22.5286 33.1468 22.405 33.2095 22.2814 33.2512C22.1579 33.3139 22.0343 33.3557 21.8901 33.3766C21.7666 33.3975 21.6224 33.4183 21.4989 33.4183Z" fill="#CF572B"/>
</svg>

				`
		},
		{
			title: 'Qualified Trainers',
			description:
				'Forest School is run by qualified Forest School practitioners, who continuously maintain and develop their professional practice',
			svg: `<svg width="22" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M36.1021 22.7635V33.1139C36.1021 35.7803 33.8396 38.6356 31.12 39.4753L23.8295 41.7008C22.5497 42.0997 20.47 42.0997 19.213 41.7008L11.9226 39.4753C9.18013 38.6356 6.94043 35.7803 6.94043 33.1139L6.96328 22.7635L17.0647 28.81C19.5329 30.3007 23.601 30.3007 26.0692 28.81L36.1021 22.7635Z" fill="#CF572B"/>
<path d="M39.7603 9.36889L26.0707 1.11797C23.6025 -0.372656 19.5345 -0.372656 17.0662 1.11797L3.30813 9.36889C-1.10271 11.9932 -1.10271 17.9348 3.30813 20.5801L6.96478 22.7636L17.0662 28.8101C19.5345 30.3007 23.6025 30.3007 26.0707 28.8101L36.1037 22.7636L39.2347 20.8741V27.2985C39.2347 28.1592 40.0117 28.8731 40.9487 28.8731C41.8857 28.8731 42.6628 28.1592 42.6628 27.2985V16.9691C43.577 14.2607 42.6399 11.1114 39.7603 9.36889Z" fill="#CF572B"/>
</svg>

			`
		},
		{
			title: 'Holistic Development',
			description:
				'Forest School aims to promote the holistic development of all involved, fostering resilient, confident, independent and creative learners.',
			svg: `<svg width="30" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M24.2999 3.07369C24.2999 1.63777 23.0911 0.473694 21.5999 0.473694C20.1087 0.473694 18.8999 1.63777 18.8999 3.07369V5.67369C18.8999 7.10962 20.1087 8.27369 21.5999 8.27369C23.0911 8.27369 24.2999 7.10962 24.2999 5.67369V3.07369Z" fill="#CF572B"/>
<path opacity="0.4" d="M36.8733 10.2427C37.9276 9.22731 37.9276 7.58109 36.8733 6.56571C35.8189 5.55036 34.1093 5.55036 33.0549 6.56571L31.1457 8.4042C30.0914 9.41955 30.0914 11.0658 31.1457 12.0811C32.2001 13.0965 33.9097 13.0965 34.9641 12.0811L36.8733 10.2427Z" fill="#CF572B"/>
<path opacity="0.4" d="M43.2001 21.2737C43.2001 22.7097 41.9913 23.8737 40.5001 23.8737H37.8001C36.3089 23.8737 35.1001 22.7097 35.1001 21.2737C35.1001 19.8378 36.3089 18.6737 37.8001 18.6737H40.5001C41.9913 18.6737 43.2001 19.8378 43.2001 21.2737Z" fill="#CF572B"/>
<path opacity="0.4" d="M8.23564 12.0813C9.29005 13.0966 10.9996 13.0966 12.054 12.0813C13.1084 11.0659 13.1084 9.41967 12.054 8.40432L10.1448 6.56584C9.09041 5.55048 7.38088 5.55048 6.32645 6.56584C5.27204 7.58119 5.27204 9.22743 6.32645 10.2428L8.23564 12.0813Z" fill="#CF572B"/>
<path opacity="0.4" d="M8.1 21.2737C8.1 22.7097 6.89116 23.8737 5.4 23.8737H2.7C1.20884 23.8737 0 22.7097 0 21.2737C0 19.8378 1.20884 18.6737 2.7 18.6737H5.4C6.89116 18.6737 8.1 19.8378 8.1 21.2737Z" fill="#CF572B"/>
<path d="M16.2002 36.8737V34.2737H27.0002V36.8737C27.0002 39.7456 24.5826 42.0737 21.6002 42.0737C18.6179 42.0737 16.2002 39.7456 16.2002 36.8737Z" fill="#CF572B"/>
<path d="M27.0022 31.6737C27.0417 30.7889 27.5603 29.9933 28.2872 29.4405C30.7922 27.536 32.3998 24.5855 32.3998 21.2737C32.3998 15.5299 27.5644 10.8737 21.5998 10.8737C15.6351 10.8737 10.7998 15.5299 10.7998 21.2737C10.7998 24.5855 12.4075 27.536 14.9124 29.4405C15.6393 29.9933 16.158 30.7889 16.1974 31.6737H27.0022Z" fill="#CF572B"/>
</svg>


				`
		}
	];
	const ethos = [
		{
			title: 'Nature Connection',
			description:
				'Our clubs place a strong emphasis on connecting children with the natural world. It recognises the importance of nature in nurturing physical, emotional, and intellectual well-being.'
		},
		{
			title: 'Child-Led Learning',
			description:
				"We are big advocates of child-led learning, granting children the freedom to explore, experiment, and make decisions about their outdoor activities, fostering independence and decision-making skills. Our approach is inspired by the Latin notion of 'Educare,' which means to nurture and bring out the inherent, divine qualities within each child. "
		},
		{
			title: 'Long-Term Engagement',
			description:
				'We wanted to create opportunities for children to regularly access and have long-term engagement with nature, allowing them to develop a deep and meaningful relationship with the environment over time and over seasons.'
		},
		{
			title: 'Holistic Development',
			description:
				"Our ethos promotes holistic development, addressing not only cognitive skills but also physical, social, emotional, and spiritual aspects of a child's growth and well-being."
		},
		{
			title: 'Play and Exploration',
			description:
				'Play is a central component of our clubs. We recognise the importance of play as a means of learning, creativity, and personal development. Children are also encouraged to engage in unstructured play and exploration in between activities.'
		},
		{
			title: 'Community and Collaboration',
			description:
				'Our clubs aim to promote a sense of community and collaboration among other children. Activities may include group projects and shared experiences that foster social skills and teamwork.'
		},
		{
			title: 'Reflection and Learning from Nature',
			description:
				'Children are encouraged to reflect on their experiences in nature and learn from the environment itself. This promotes a sense of stewardship and environmental awareness.'
		},
		{
			title: 'Qualified Educators',
			description:
				'Our clubs will always be led by qualified Forest School practitioners who have undergone specific training in this educational approach. Our educators facilitate learning experiences, provide guidance, and ensure safety.'
		}
	];
</script>

<section class="container pt-5 space-y-7">
	<h1
		class="text-3xl -mb-4 leading-[42px] text-[#CF572B] font-semibold max-md:text-2xl text-center"
	>
		What is a Forest School?
	</h1>
	<p class="leading-7 max-md:text-sm max-md:leading-6">
		Forest School is a form of outdoor education that emphasises child-led learning. Forest school
		practitioners provide a non-judgmental environment that supports play exploration and supported
		risk taking. It is a long term process of frequent and regular sessions in a woodland or natural
		environment that focuses on holistic development that carries over both in school and in the
		home.
	</p>
	<div class="w-full h-[500px] max-md:h-[250px] max-md:mt-5 rounded-lg overflow-hidden">
		<img
			class="w-full h-full object-cover"
			srcset="https://res.cloudinary.com/dk8kuqbbc/image/upload/f_auto/q_auto/v1698693569/Forest%20school.webp 1024w,
			https://res.cloudinary.com/dk8kuqbbc/image/upload/w_650,h_364/f_auto/q_auto/v1698693569/Forest%20school.webp 640w,
			https://res.cloudinary.com/dk8kuqbbc/image/upload/w_320,h_179/f_auto/q_auto/v1698693569/Forest%20school.webp  320w"
			src="https://res.cloudinary.com/dk8kuqbbc/image/upload/v1698693569/Forest%20school.webp"
			alt=""
		/>
	</div>
</section>

<section class="container">
	<h1 class="text-3xl leading-[42px] text-[#CF572B] font-semibold my-8 max-md:text-2xl text-center">
		Principles of a Forest School
	</h1>
	<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
		{#each principles as principle}
			<div class="pt-2 pb-4 px-5 rounded-lg bg-[#ffe6dd]">
				<div class="flex items-center gap-4">
					{@html principle.svg}
					<p class="font-medium text-[#CF572B]">{principle.title}</p>
				</div>
				<p class="text-sm leading-6 text-[#4e3328]">
					{principle.description}
				</p>
			</div>
		{/each}
	</div>
	<div class="flex justify-center">
		<Button classname="mt-6" variant="RED">Learn More</Button>
	</div>
</section>

<section class="container scroll-mt-16" id="ethos">
	<h1 class="text-3xl leading-[42px] my-8 max-md:text-2xl text-[#CF572B] font-semibold text-center">
		The Bees Knees Ethos
	</h1>
	<p class="max-md:text-sm max-md:leading-6 leading-7">
		Much like Forest Schools, our Bee's Knees ethos is based on an educational approach that
		emphasises experiential and nature-based learning in outdoor settings. It is rooted in a
		philosophy that seeks to foster holistic development in children of all ages and physical
		abilities. Here are some key principles and aspects of the Bee's Knees ethos:
	</p>
	<ul class="flex gap-2 flex-col mt-2">
		{#each ethos as etho, index}
			<li class="mt-4 flex gap-4">
				<div
					class="min-w-[40px] min-h-[40px] w-[45px] h-[40px] max-md:hidden rounded-full justify-center flex items-center bg-[#ffe6dd] text-[#CF572B]"
				>
					<p class="text-sm font-bold">0{index + 1}</p>
				</div>
				<p class="leading-7 max-md:leading-6 max-md:text-sm">
					<span class="font-bold"><span class="text-[#CF572B] underline">{etho.title}:</span></span>
					<span>{etho.description}</span>
				</p>
			</li>
		{/each}
	</ul>
</section>

<section class="container leading-8 scroll-mt-16" id="evidence">
	<h1
		class="text-3xl leading-[42px] mt-8 mb-4 max-md:text-2xl text-[#CF572B] font-semibold text-center"
	>
		Evidence
	</h1>
	<p class="max-md:text-sm max-md:leading-6">
		Evidence that suggests time spent outdoors in childhood is associated with reduced risk of
		myopia (short-sightedness) as an adult. The study followed two cohorts of children under the age
		of 6 and found that those that were exposed to just 10 hours of natural daylight a week were
		significantly less likely to experience myopia as adults compared to their counter group who
		were on average exposed to less than 10 hours of natural daylight per week. (1)
	</p>
	<p class="font-bold mt-4 max-md:text-sm max-md:leading-6">Evidence</p>
	<p class="max-md:text-sm max-md:leading-6">
		Lingham, G., Yazar, S., Lucas, R.M. et al. Time spent outdoors in childhood is associated with
		reduced risk of myopia as an adult. Sci Rep 11, 6337 (2021).
		<bt /><br />https://www.littleforestfolk.com/evidence
	</p>
</section>
