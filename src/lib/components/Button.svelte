<script lang="ts">
	export let variant = 'PRIMARY';
	export let classname = '';
	export let style = ''
	const variants: any = {
		PRIMARY: 'bg-[#374b35] rounded-full py-[12px] px-5 cursor-pointer text-[#FFFFFF] text-sm hover:bg-[#374b35DD] transition-all',
		WHITE: 'bg-white rounded-full py-[6px] px-2 cursor-pointer text-secondary-foreground text-sm transition-all',
		GREEN: 'bg-[#054900] rounded-full py-[12px] px-5 cursor-pointer text-primary-foreground text-sm hover:bg-primary/90 transition-all',
		RED: 'bg-[#CF572B] rounded-full py-[12px] px-5 cursor-pointer text-[#FFFFFF] text-sm hover:bg-[#CF572BDD] transition-all'
	};
</script>

<button class={`rounded-full cursor-pointer ${variants[variant]} ${classname}`} style={style}>
	<slot />
</button>
