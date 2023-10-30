<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/Button.svelte';
	import { Input } from '$lib/components/ui/Input/index';
	import Label from '$lib/components/ui/label/label.svelte';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Check, Loader2 } from 'lucide-svelte';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';

	let isSubmitting = false;
	let message = '';
	$: console.log(message.length);
	$: messageLength = message.length;
	let showSuccessMessage = false;
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
			<h1 class="text-3xl max-md:text-2xl text-[#CF572B] font-semibold">Contact Us</h1>
			<p class="my-3 max-md:text-sm max-md:leading-6 leading-7">
				If you have any sort of questions, feel free to contact us by filling out this form or
				emailing us at email@gmail.com
			</p>
			<form
				action=""
				use:enhance={({ formElement, formData, action, cancel, submitter }) => {
					isSubmitting = true;
					if (!formData.get('email')) return alert('Please enter an email');
					if (!formData.get('message')) return alert('Please enter a message');
					if (message.length >= 800)
						return alert('The message must not be bigger than 800 characters');
					return async ({ result, update }) => {
						isSubmitting = false;
						showSuccessMessage = true;
					};
				}}
				method="POST"
				class="space-y-4 mt-2"
			>
				<div class="space-y-2">
					<Label for="fullName">Full Name</Label>
					<Input type="text" name="fullName" placeholder="Enter your full name here" />
				</div>
				<div class="space-y-2">
					<Label for="email">Email*</Label>
					<Input type="email" name="email" required placeholder="Enter your email address here" />
				</div>
				<div class="space-y-2">
					<Label for="phone">Phone</Label>
					<Input type="tel" name="phone" placeholder="Enter your phone number here" />
				</div>
				<div class="space-y-2">
					<Label for="message">Message</Label>
					<Textarea
						name="message"
						required
						placeholder="Enter your message here"
						bind:value={message}
						maxlength={800}
					/>
					{#if messageLength >= 800}
						<p class="text-sm text-red-500">The message must not be bigger than 800 characters</p>
					{/if}
				</div>
				<Button
					variant="RED"
					disabled={isSubmitting}
					style={`display:flex; justify-content:center; align-items-center; margin-top:15px;`}
				>
					{#if isSubmitting}
						<Loader2 class="mr-2 h-4 w-4 mt-[2px] animate-spin" />
					{/if}
					Send
				</Button>
			</form>
		</div>
	</div>
</section>

<AlertDialog.Root open={showSuccessMessage}>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title class="flex items-center">
				<Check class="h-4 w-4 mr-2" />
				<p>Message sent successfully</p>
			</AlertDialog.Title>
			<AlertDialog.Description>We have recieved your message. We will get back to you shortly</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>Close</AlertDialog.Cancel>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
