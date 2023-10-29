<script lang="ts">
	import { page } from '$app/stores';
	import { CLUBS } from '../../../data/clubs';
	import { Input } from '$lib/components/ui/Input';
	import Label from '$lib/components/ui/label/label.svelte';
	import * as Select from '$lib/components/ui/select';
	import Button from '$lib/components/Button.svelte';
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { Check, Loader2, X } from 'lucide-svelte';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	let isSubmitting = false;

	const id = $page.params.id;
	$: club = CLUBS.find((club) => club.id.toLowerCase() == id.toLowerCase());
	if (!club) {
	}
	let day: string = '';
	let school: string = '';
	$: successAlertOpen = $page.url.searchParams.get('paymentSuccess');
	$: failureAlertOpen = $page.url.searchParams.get('paymentFailure');

</script>

{#if club}
	<section class="container pt-1">
		<h1
			class="text-3xl leading-[42px] font-semibold mt-3 mb-8 max-md:text-2xl text-center"
			style={`color: ${club.primaryColor};`}
		>
			{club?.title}
		</h1>
		<div class="w-full max-md:h-[200px] h-[400px] rounded-lg overflow-hidden">
			<img class="w-full h-full object-cover" src={club.image} alt="" />
		</div>
		<div class="flex justify-between max-md:flex-col gap-10 mt-3">
			<p class="mt-4 leading-7 w-4/5 max-md:w-full max-md:text-sm max-md:leading-6">
				{club?.description}
			</p>
			<form
				method="POST"
				use:enhance={({ formElement, formData, action, cancel, submitter }) => {
					if (!school) return alert('Please select a school');
					if (!day) return alert('Please select a day');
					if (!formData.get('children')) return alert('Please enter the number of children');
					formData.set('school', school);
					formData.set('day', day);
					formData.set('successUrl', $page.url.href.split('?')[0] + '?paymentSuccess=true');
					formData.set('errorUrl', $page.url.href.split('?')[0] + '?paymentFailure=true');
					isSubmitting = true;
					return async ({ result, update }) => {
						isSubmitting = false;
						// @ts-ignore
						goto(result.data.url);
					};
				}}
				style={`background-color:${club?.secondaryColor}`}
				class="w-2/5 max-w-[350px] mt-4 rounded-lg h-full space-y-2 border p-4 max-md:w-full"
			>
				<p class="mb-2" style={`color:${club?.primaryColor}`}>Club Details</p>
				<div class="space-y-2">
					<Label style={`color:${club?.primaryColor}`} for="school">School</Label>
					<Select.Root onSelectedChange={(item) => (school = item?.label || '')}>
						<Select.Trigger
							type="button"
							style={`border:1px solid ${club?.primaryColor}`}
							class="rounded-full py-5 "
						>
							<Select.Value placeholder="Pick a school" />
						</Select.Trigger>
						<Select.Content>
							{#each CLUBS as club}
								<Select.Item value={club.id}>{club.title}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</div>
				<div class="space-y-2">
					<Label for="date">Date</Label>
					<Select.Root onSelectedChange={(item) => (day = item?.label || '')}>
						<Select.Trigger
							type="button"
							style={`border:1px solid ${club?.primaryColor}`}
							class="rounded-full py-5 "
						>
							<Select.Value placeholder="Pick a date" />
						</Select.Trigger>
						<Select.Content>
							{#each club.days as date}
								<Select.Item value={date}>{date}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</div>
				<div class="space-y-2">
					<Label for="children">Children</Label>
					<Input
						style={`border:1px solid ${club?.primaryColor}`}
						name="children"
						placeholder="Number of children"
						type="number"
						min={1}
					/>
				</div>
				<Button
					disabled={isSubmitting}
					style={`background-color: ${club.primaryColor}; color:${club.secondaryColor}; display:flex; justify-content:center; align-items-center; width:100%; margin-top:15px;`}
				>
					{#if isSubmitting}
						<Loader2 class="mr-2 h-4 w-4 mt-[2px] animate-spin" />
					{/if}
					Checkout
				</Button>
			</form>
		</div>
	</section>

	<section class="container">
		<h2
			class="max-md:text-2xl my-8 mt-12 text-3xl leading-[42px] font-semibold text-center"
			style={`color: ${club.primaryColor};`}
		>
			Term Highlights
		</h2>
		<ul>
			{#each club.termHighlights as term, index}
				<li class="mt-4 flex gap-4 max-md:text-sm w-full">
					<div
						class="flex items-center justify-center min-h-8 min-w-8 h-8 w-8 rounded-full"
						style={`background-color:${club.secondaryColor}`}
					>
						<p class="text-sm font-bold" style={`color:${club.primaryColor}`}>0{index + 1}</p>
					</div>
					<p class="leading-7 w-fit">
						<span class="font-bold" style={`color: ${club.primaryColor};`}
							>{term.title}:
						</span>{term.description}
					</p>
				</li>
			{/each}
		</ul>
	</section>
	<section class="container">
		<h2
			class="max-md:text-2xl text-center my-8 text-3xl leading-[42px] font-semibold"
			style={`color: ${club.primaryColor};`}
		>
			Term Finale
		</h2>
		<p class="leading-7 max-md:text-sm">{@html club.termFinale}</p>
	</section>
{/if}
<AlertDialog.Root open={successAlertOpen == 'true' ? true : false}>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title class="flex items-center">
				<Check class="h-4 w-4 mr-2" />
				<p>Payment Successful</p>
			</AlertDialog.Title>
			<AlertDialog.Description>
				Your payment has been successful
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>Close</AlertDialog.Cancel>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>

<AlertDialog.Root open={failureAlertOpen == 'true' ? true : false}>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title class="flex items-center">
				<X class="h-4 w-4 mr-2" />
				<p>Payment Unsuccessful</p>
			</AlertDialog.Title>
			<AlertDialog.Description>
				Your payment has been unsuccessful
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>Close</AlertDialog.Cancel>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
