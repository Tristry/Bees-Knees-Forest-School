<script>
	import Button from './Button.svelte';
	let mobileMenuShow = false;
</script>

<header class="fixed top-0 bg-white w-full h-16 z-50 border-b">
	<nav class="w-full h-full container">
		<ul class="w-full h-full flex items-center">
			<a href="/">
				<li class="flex items-center gap-3">
					<img src="/logo.svg" width={50} alt="" class="-mt-2" />
					<p class="font-semibold leading-5">
						Bee's Knees <br /> Forest School
					</p>
				</li>
			</a>
			<li class="md:hidden ml-auto">
				<button on:click={() => (mobileMenuShow = !mobileMenuShow)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						width="25"
						height="22"
						viewBox="0 0 12 12"
						enable-background="new 0 0 12 12"
						version="1.1"
						xml:space="preserve"
					>
						<g>
							<rect fill="#1D1D1B" height="1" width="11" x="0.5" y="5.5" />

							<rect fill="#1D1D1B" height="1" width="11" x="0.5" y="2.5" />

							<rect fill="#1D1D1B" height="1" width="11" x="0.5" y="8.5" />
						</g>
					</svg>
				</button>
			</li>
			<div class="flex items-center ml-auto max-md:hidden">
				<li
					class="relative ml-auto mr-5 text-[14px] flex items-center gap-2 font-semibold cursor-pointer group"
				>
					Who we are
					<svg
						class="group-hover:rotate-180 transition-all"
						xmlns="http://www.w3.org/2000/svg"
						width="20px"
						viewBox="0 0 24 24"
					>
						<rect x="0" fill="none" width="24" height="24" />
						<g>
							<path d="M7 10l5 5 5-5" />
						</g>
					</svg>
					<div
						class="flex opacity-0 translate-y-2 group-hover:opacity-100 w-full group-hover:translate-y-0 transition-all flex-col absolute top-0"
					>
						<div class="w-full h-8 bg-transparent" />
						<div class="bg-white border rounded-lg p-1 space-y-1">
							<a class="w-full h-full" href="/about">
								<div class="w-full p-2 h-full rounded-lg whitespace-nowrap hover:bg-black/10">
									About Us
								</div>
							</a>
							<a class="w-full h-full" href="/about#team">
								<div class="w-full p-2 h-full rounded-lg whitespace-nowrap hover:bg-black/10">
									Our Team
								</div>
							</a>
						</div>
					</div>
				</li>
				<li
					class="relative ml-auto mr-5 text-[14px] flex items-center gap-2 font-semibold cursor-pointer group"
				>
					<a href="/about">After school clubs</a>
					<svg
						class="group-hover:rotate-180 transition-all"
						xmlns="http://www.w3.org/2000/svg"
						width="20px"
						viewBox="0 0 24 24"
					>
						<rect x="0" fill="none" width="24" height="24" />
						<g>
							<path d="M7 10l5 5 5-5" />
						</g>
					</svg>
					<div
						class="z-[-1] flex opacity-0 translate-y-2 group-hover:opacity-100 w-full group-hover:translate-y-0 transition-all flex-col absolute top-0"
					>
						<div class="w-full h-8 bg-transparent" />
						<div class="bg-white border rounded-lg p-1 space-y-1">
							<a class="w-full h-full" href="/clubs">
								<div class="w-full p-2 h-full rounded-lg whitespace-nowrap hover:bg-black/10">
									Our Clubs
								</div>
							</a>
							<a class="w-full h-full" href="/#faq">
								<div class="w-full p-2 h-full rounded-lg whitespace-nowrap hover:bg-black/10">
									FAQs
								</div>
							</a>
							<a class="w-full h-full" href="/policies">
								<div class="w-full p-2 h-full rounded-lg whitespace-nowrap hover:bg-black/10">
									Policies
								</div>
							</a>
						</div>
					</div>
				</li>
				<li
					class="relative ml-auto mr-5 text-[14px] flex items-center gap-2 font-semibold cursor-pointer group"
				>
					Why Forest School
					<svg
						class="group-hover:rotate-180 transition-all"
						xmlns="http://www.w3.org/2000/svg"
						width="20px"
						viewBox="0 0 24 24"
					>
						<rect x="0" fill="none" width="24" height="24" />
						<g>
							<path d="M7 10l5 5 5-5" />
						</g>
					</svg>
					<div
						class="z-[-1] flex opacity-0 translate-y-2 group-hover:opacity-100 w-full group-hover:translate-y-0 transition-all flex-col absolute top-0"
					>
						<div class="w-full h-8 bg-transparent" />
						<div class="bg-white border rounded-lg p-1 space-y-1">
							<a class="w-full h-full" href="/forestschool">
								<div class="w-full p-2 h-full rounded-lg whitespace-nowrap hover:bg-black/10">
									What is a FS
								</div>
							</a>
							<a class="w-full h-full" href="/forestschool#ethos">
								<div class="w-full p-2 h-full rounded-lg whitespace-nowrap hover:bg-black/10">
									Ethos
								</div>
							</a>
							<a class="w-full h-full" href="/forestschool#evidence">
								<div class="w-full p-2 h-full rounded-lg whitespace-nowrap hover:bg-black/10">
									Benefits/Evidence
								</div>
							</a>
						</div>
					</div>
				</li>
				<li
					class="relative ml-auto mr-5 text-[14px] flex items-center gap-2 font-semibold cursor-pointer group"
				>
					<a href="/contact">Contact Us</a>
				</li>
				<a href="/clubs">
					<Button classname="font-semibold" variant="RED">Join a club</Button>
				</a>
			</div>
			<div
				class="md:hidden w-full h-[calc(100vh-64px)] container bg-white top-16 absolute transition-all"
				style={`${mobileMenuShow ? 'left:0%;' : 'left:100%;'}`}
			>
				<div class="flex flex-col">
					<li
						class="relative mr-5 text-[18px] items-center gap-2 font-semibold cursor-pointer group py-5 border-b justify-between"
					>
						Who we are
						<div class="flex flex-col mt-3 justify-center">
							<a
								on:click={() => (mobileMenuShow = !mobileMenuShow)}
								class="pl-5 pb-2 border-l hover:border-black"
								href="/about">About Us</a
							>
							<a
								on:click={() => (mobileMenuShow = !mobileMenuShow)}
								class="pl-5 pb-2 border-l hover:border-black"
								href="/about#team">Our Team</a
							>
						</div>
					</li>
					<li
						class="relative mr-5 text-[18px] items-center gap-2 font-semibold cursor-pointer group py-5 border-b justify-between"
					>
						After School Clubs
						<div class="flex flex-col mt-3 justify-center">
							<a
								on:click={() => (mobileMenuShow = !mobileMenuShow)}
								class="pl-5 pb-2 border-l hover:border-black"
								href="/clubs">Our clubs</a
							>
							<a
								on:click={() => (mobileMenuShow = !mobileMenuShow)}
								class="pl-5 pb-2 border-l hover:border-black"
								href="/#faq">FAQ</a
							>
							<a
								on:click={() => (mobileMenuShow = !mobileMenuShow)}
								class="pl-5 pb-2 border-l hover:border-black"
								href="/policies">Policies</a
							>
						</div>
					</li>
					<li
						class="relative mr-5 text-[18px] items-center gap-2 font-semibold cursor-pointer group py-5 border-b justify-between"
					>
						Why Forest School
						<div class="flex flex-col mt-3 justify-center">
							<a
								on:click={() => (mobileMenuShow = !mobileMenuShow)}
								class="pl-5 pb-2 border-l hover:border-black"
								href="/forestschool">What is a Forest School</a
							>
							<a
								on:click={() => (mobileMenuShow = !mobileMenuShow)}
								class="pl-5 pb-2 border-l hover:border-black"
								href="/forestschool#ethos">Ethos</a
							>
							<a
								on:click={() => (mobileMenuShow = !mobileMenuShow)}
								class="pl-5 pb-2 border-l hover:border-black"
								href="/forestschool#evidence">Benefits/Evidence</a
							>
						</div>
					</li>
					<li
						class="relative text-[18px] items-center gap-2 font-semibold cursor-pointer group py-5 border-b justify-between"
					>
						<a
							on:click={() => (mobileMenuShow = !mobileMenuShow)}
							class="pb-2 hover:border-black"
							href="/contact"
						>
							Contact Us
						</a>
					</li>
					<Button classname="!font-semibold">Join a club</Button>
				</div>
			</div>
		</ul>
	</nav>
</header>
