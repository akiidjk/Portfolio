<script>
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { Menu } from '@svelteuidev/core';
	import {
		BookmarkFilled,
		HamburgerMenu,
		Home,
		LockClosed,
		Person,
		Share1
	} from 'radix-icons-svelte';

	let width = 0;

	const updateDimensions = () => {
		width = window.innerWidth;
	};

	onMount(() => {
		updateDimensions();
		window.addEventListener('resize', updateDimensions);

		return () => {
			window.removeEventListener('resize', updateDimensions);
		};
	});
</script>

<nav class="fixed w-full z-20 shadow-lg flex">
	<div class="bg-transparent backdrop-blur-sm w-full h-20 flex justify-between items-center">
		<div class="mx-10 flex items-center">
			<img
				src="spidy.jpg"
				alt="Logo"
				class="w-14 h-14 rounded-full object-cover object-center mr-10"
			/>
			<h1 class="text-4xl font-medium">Akiidjk</h1>
		</div>
		<div class="flex mr-10">
			{#if width < 760}
				<Menu transitionOptions={{ y: 200 }}>
					<button slot="control">
						<HamburgerMenu size={24} />
					</button>
					<Menu.Label>Menu</Menu.Label>
					<Menu.Item icon={Home}><a class="mx-5" href="/">Home</a></Menu.Item>
					<Menu.Item icon={Person}><a class="mx-5" href="/">About</a></Menu.Item>
					<Menu.Item icon={BookmarkFilled}><a class="mx-5" href="/">Projects</a></Menu.Item>
					<Menu.Item icon={Share1}><a class="mx-5" href="/">Contacts</a></Menu.Item>
					<Menu.Item icon={LockClosed}><a class="mx-5" href="/">Admin</a></Menu.Item>
					<Menu.Item>
						<LightSwitch />
					</Menu.Item>
				</Menu>
			{:else}
				<a class="mx-5 text-lg navbar_element" data-content="Home" href="/">Home</a>
				<a class="mx-5 text-lg navbar_element" data-content="About" href="/">About</a>
				<a class="mx-5 text-lg navbar_element" data-content="Projects" href="/">Projects</a>
				<a class="mx-5 text-lg navbar_element" data-content="Contacts" href="/">Contacts</a>
				<a class="mx-5 text-lg navbar_element" data-content="Admin" href="/">Admin</a>
			{/if}
		</div>
	</div>
</nav>
<div class="h-20"></div>

<style lang="scss">
	.navbar_element {
		position: relative;
		display: inline-block;
		color: #fff;
		text-decoration: none;
		overflow: hidden;

		&::before {
			position: absolute;
			content: attr(data-content);
			top: 0;
			left: 0;
			width: 0;
			color: #b26cc7;
			white-space: nowrap;
			overflow: hidden;
			transition: width 275ms ease;
			text-decoration: underline;
			text-decoration-thickness: 2px;
		}

		&::after {
			content: '';
			position: absolute;
			left: 0;
			bottom: -2px;
			width: 0;
			height: 2px;
			background-color: #b26cc7;
			transition: width 275ms ease;
		}

		&:hover::before {
			width: 100%;
		}

		&:hover::after {
			width: 100%;
		}

		&:hover {
			color: transparent;
			transition: color 275ms ease;
		}
	}
</style>
