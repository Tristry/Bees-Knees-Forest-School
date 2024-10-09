<script>
	import Button from '$lib/components/Button.svelte';
	import { Input } from '$lib/components/ui/Input/index';
	import Label from '$lib/components/ui/label/label.svelte';
	import { Textarea } from '$lib/components/ui/textarea';
	import * as Select from '$lib/components/ui/select';
</script>

<section id="contact" class="flex -mb-10 max-md:mb-0 max-md:container h-[calc(100vh-64px)] gap-10">
	<div class="w-1/2 max-md:hidden">
		<img
			src="https://cdn.midjourney.com/3a37b3cf-f72e-476f-8c2c-89d03b7488d2/0_0.png"
			alt=""
			class="w-full h-full object-cover"
		/>
	</div>
	<div class="w-1/2 mt-8 max-md:mt-2 max-md:w-full">
		<div class=" h-full max-w-[600px] max-md:text-left mt-5">
			<h1 class="text-3xl max-md:text-2xl text-[#CF572B] font-semibold">Careers</h1>
			<p class="my-3 max-md:text-sm max-md:leading-6 leading-7">
				Passionate about inspiring the next generation through nature? We're always eager to connect
				with enthusiastic, nature-loving individuals who share our values. Fill out the form below
				to introduce yourself!
			</p>

			<div class="space-y-4 mt-2">
				<div class="space-y-2">
					<Label for="fullName">What's your qualifications</Label>
					<Select.Root>
						<Select.Trigger>
							<Select.Value placeholder="Qualifications" />
						</Select.Trigger>
						<Select.Content>
							<Select.Item value="light">Level 1</Select.Item>
							<Select.Item value="dark">Level 2</Select.Item>
							<Select.Item value="system">Level 3</Select.Item>
							<Select.Item value="system">Internship</Select.Item>
						</Select.Content>
					</Select.Root>
				</div>
				<div class="space-y-2">
					<Label for="fullName">Full Name</Label>
					<Input type="text" name="fullName" placeholder="Enter your full name here" />
				</div>
				<div class="space-y-2">
					<Label for="email">Email</Label>
					<Input type="email" name="email" placeholder="Enter your email address here" />
				</div>
				<div class="space-y-2">
					<Label for="phone">Phone</Label>
					<Input type="text" name="phone" placeholder="Enter your phone number here" />
				</div>
				<div class="space-y-2">
					<Label for="message">Message</Label>
					<Textarea name="message" placeholder="Enter your message here" />
				</div>
				<Button variant="RED" classname="w-full">Contact</Button>
			</div>
		</div>
	</div>
</section>
