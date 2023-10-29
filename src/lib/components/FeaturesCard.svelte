<script lang="ts">
	export let image = '';
	export let title = '';
	export let description = '';
</script>

<div class="w-full h-[500px] max-md:h-full rounded-lg relative group overflow-hidden bg-[#ECEAE9] text-center">
	<div
		class="w-full h-full rounded-lg overflow-hidden md:group-hover:h-1/2 max-md:h-[250px] transition-all duration-500"
	>
		<img src={image} alt="" class="w-full h-full object-cover" />
	</div>
	<div class="w-full h-1/2 relative -mt-16 group-hover:mt-0 max-md:mt-0 max-md:h-fit transition-mt duration-500">
		<div
			class="absolute max-md:relative top-0 h-fit flex flex-col gap-2 mb-3 p-3 text-white z-10 group-hover group-hover:text-primary max-md:text-primary transition-all duration-75"
		>
			<h2 class="text-lg font-medium">{title}</h2>
			<p
				id="description"
				class={`text-sm leading-6 opacity-80 max-h-0 max-md:max-h-80 overflow-hidden group-hover:max-h-80 transition-all duration-300`}
			>
				{description}
			</p>
		</div>
	</div>
</div>
