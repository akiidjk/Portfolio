<script lang="ts">
	import Typewriter from 'svelte-typewriter';
	import { MultiStepLoader, Navbar } from '$lib';
	import { IconSquareRoundedX } from '@tabler/icons-svelte';
	import { onMount } from 'svelte';
	import { Canvas } from '@threlte/core';
	import { SceneHome } from '$lib';
	import { blur, fly, fade } from 'svelte/transition';
	import { circOut } from 'svelte/easing';

	let words: string[] = ['Developer', 'CTF Player', 'Student'];

	let loading = true;
	// let loading = false;
	let duration: number = 2000;
	const loadingStates = [
		{ text: 'Booting' },
		{ text: 'Loading I/O' },
		{ text: 'Loading drivers' },
		{ text: 'Loading operating system' },
		{ text: 'Starting services' },
		{ text: 'Loading user interface' },
		{ text: 'Get config' },
		{ text: 'Welcome in my cave' }
	];


	onMount(() => {
		setTimeout(() => {
			loading = false;
		}, (duration * loadingStates.length));
	});

</script>

<!--https://www.npmjs.com/package/svelte-typewriter#installation-->
<!--keepCursorOnFinish={true}-->

<style>
    :global(body) {
        margin: 0;
    }

    div {
        height: 68vh;
    }
</style>


<main class="w-full h-1/3">

	<MultiStepLoader {loadingStates} {loading} duration={duration} loop={false} />
	{#if loading}
		<button
			class="fixed right-4 top-4 z-[120] text-black dark:text-white"
			on:click={() => {loading = false}}
		>
			<IconSquareRoundedX class="h-10 w-10" />
		</button>
	{/if}

	<div class="flex w-full float-left">

		<div class="mt-52 w-[50%]">
			{#if !loading}
				<div transition:fly={{ delay: 550, duration: 1000, easing: circOut,x:-1000,y:0}}>
					<Typewriter mode="loop" cursor={true} delay={100}>
						{#each Object.entries(words) as [_, value]}
							<div>
								<h1 class="text-8xl font-medium text-center">{value}</h1>
							</div>
						{/each}
					</Typewriter>
				</div>
			{/if}
		</div>


		<div class="w-[50%] float-right">
			{#if !loading}
				<div transition:fly={{ delay: 550, duration: 1000, easing: circOut,x:1000,y:0}}>
					<Canvas>
						<SceneHome />
					</Canvas>
				</div>
			{/if}
		</div>

	</div>
</main>


