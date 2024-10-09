<script>
	export let title = '';
	export let content = '';

	let expanded = false;
</script>

<div
	role="button"
	tabindex="-1"
	on:click={() => (expanded = !expanded)}
	on:keydown={() => {}}
	class="w-full max-w-8xl cursor-pointer rounded-lg overflow-hidden"
>
	<div class="flex gap-5 px-4 py-3 items-center bg-[#ECEAE9] ">
		<svg width="15" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M28.3333 14.4016H1.66667C0.755556 14.4016 0 13.7487 0 12.9614C0 12.1741 0.755556 11.5212 1.66667 11.5212H28.3333C29.2444 11.5212 30 12.1741 30 12.9614C30 13.7487 29.2444 14.4016 28.3333 14.4016Z"
				fill="#442921"
			/>
			<path
				d="M14.9999 25.9229C14.0888 25.9229 13.3333 25.27 13.3333 24.4828V1.44005C13.3333 0.652755 14.0888 -0.00012207 14.9999 -0.00012207C15.911 -0.00012207 16.6666 0.652755 16.6666 1.44005V24.4828C16.6666 25.27 15.911 25.9229 14.9999 25.9229Z"
				fill="#442921"
                class={`${expanded ? "transform rotate-90" : "transform rotate-0"} origin-center transition-all duration-500`}
			/>
		</svg>
		<p class="text-[#442921]">{title}</p>
	</div>
	<div class={`bg-[#ECEAE942] w-full transition-all ease-in-out duration-500 overflow-hidden px-4 ${expanded ? "max-h-[800px] py-2" : "max-h-0 py-0"}`}>
		<p class="text-sm leading-6 text-[#442921]">
			{@html content}
		</p>
	</div>
</div>