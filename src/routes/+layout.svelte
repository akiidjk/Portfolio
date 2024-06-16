<script lang="ts">
	import '../app.postcss';
	import { blur, fly, fade } from 'svelte/transition';
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs, storePopup } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
	import { Navbar } from '$lib';
	import { onMount } from 'svelte';
	import { circOut } from 'svelte/easing';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	let elementNavbar;
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
		<div transition:fly={{ delay: 550, duration: 1000, easing: circOut,x:0,y:-100}}>
			<Navbar />
		</div>
	{/if}
</div>

<slot />
