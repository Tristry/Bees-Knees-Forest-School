<script lang="ts">
	import { page } from '$app/stores';
	import { CLUBS } from '../../../data/clubs';
	import Dropdown from '$lib/components/Dropdown.svelte';
	import { Input } from '$lib/components/ui/Input';
	import Label from '$lib/components/ui/label/label.svelte';
	import * as Select from '$lib/components/ui/select';
	import Button from '$lib/components/Button.svelte';
	const id = $page.params.id;
	$: club = CLUBS.find((club) => club.id.toLowerCase() == id.toLowerCase());
	if (!club) {
	}
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
			<div
				style={`background-color:${club?.secondaryColor}`}
				class="w-2/5 max-w-[350px] mt-4 rounded-lg h-full space-y-2 border p-4 max-md:w-full"
			>
				<p class="mb-2" style={`color:${club?.primaryColor}`}>Club Details</p>
				<div class="space-y-2">
					<Label style={`color:${club?.primaryColor}`} for="school">School</Label>
					<Select.Root>
						<Select.Trigger
							style={`border:1px solid ${club?.primaryColor}`}
							class="rounded-full py-5 "
						>
							<Select.Value placeholder="Pick a school" />
						</Select.Trigger>
						<Select.Content>
							<Select.Item value="light">Option 1</Select.Item>
							<Select.Item value="dark">Option 2</Select.Item>
							<Select.Item value="system">Option 3</Select.Item>
						</Select.Content>
					</Select.Root>
				</div>
				<div class="space-y-2">
					<Label for="date">Date</Label>
					<Select.Root>
						<Select.Trigger
							style={`border:1px solid ${club?.primaryColor}`}
							class="rounded-full py-5 "
						>
							<Select.Value placeholder="Pick a date" />
						</Select.Trigger>
						<Select.Content>
							<Select.Item value="light">Date 1</Select.Item>
							<Select.Item value="dark">Date 2</Select.Item>
							<Select.Item value="system">Date 3</Select.Item>
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
					style={`background-color: ${club.primaryColor}; color:${club.secondaryColor}; width:100%; margin-top:15px;`}
					>Checkout</Button
				>
			</div>
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
			class="max-md:text-2xl  text-center my-8 text-3xl leading-[42px] font-semibold"
			style={`color: ${club.primaryColor};`}
		>
			Term Finale
		</h2>
		<p class="leading-7 max-md:text-sm">{@html club.termFinale}</p>
	</section>
{/if}
