<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.postcss';
	import { fly } from 'svelte/transition';
	import { Navbar } from '$lib';
	import { circOut } from 'svelte/easing';

	let elementNavbar: Element;
	let inViewNavbar = false;

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					inViewNavbar = true;
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		observer.observe(elementNavbar);
	});
</script>

<div bind:this={elementNavbar}>
	{#if inViewNavbar}
		<div transition:fly={{ delay: 550, duration: 1000, easing: circOut, x: 0, y: -100 }}>
			<Navbar />
		</div>
	{/if}
</div>

<slot />
