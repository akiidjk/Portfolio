<script lang="ts">
	import Typewriter from 'svelte-typewriter';
	import { MultiStepLoader, SceneTeaShop } from '$lib';
	import { IconSquareRoundedX } from '@tabler/icons-svelte';
	import { onMount } from 'svelte';
	import { Canvas } from '@threlte/core';
	import { fade, fly } from 'svelte/transition';
	import { circOut, cubicInOut, quadInOut, sineOut } from 'svelte/easing';
	import Blob from '$lib/components/Blob.svelte';
	import * as THREE from 'three';

	import { getCookie, updateLoading } from '$lib/utils/storage';

	let words: string[] = ['Developer', 'CTF Player', 'Student', 'IT enthusiast'];

	let duration: number = 1000;
	let loading: boolean;
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
		console.log('loadingValue', getCookie('loading'));

		if (getCookie('loading') === null) {
			loading = true;

			setTimeout(() => {
				updateLoading();
				loading = false;
			}, duration * loadingStates.length);
		} else {
			console.log('Else: ', getCookie('loading'));
			loading = getCookie('loading') === 'true';
			console.log('Else: ', loading);
		}
	});
</script>

<div>
	<main class="w-full h-2/3 bg-gradient-to-b from-surface-600 to-surface-900">
		{#if !loading}
			<div transition:fade={{ delay: 1000, duration: 1000, easing: sineOut }}>
				<Blob width="1140" height="500" x="1000" y="-100" />
			</div>
			<div transition:fade={{ delay: 1000, duration: 1000, easing: sineOut }}>
				<Blob width="1140" height="500" x="-200" y="600" />
			</div>
		{/if}

		<div>
			<MultiStepLoader {loadingStates} {loading} {duration} loop={false} />
			{#if loading}
				<button
					class="fixed right-4 top-4 z-[120] text-black dark:text-white"
					on:click={() => {
						updateLoading();
						loading = false;
					}}
				>
					<IconSquareRoundedX class="h-10 w-10" />
				</button>
			{/if}

			<div class="w-full">
				<div class="mt-8 lg:mt-52 p-5 lg:h-96 sm:h-32 lg:p-11 sm:p-8 float-left w-full lg:w-1/2">
					{#if !loading}
						<div transition:fly={{ delay: 700, duration: 1200, easing: quadInOut, x: -1000, y: 0 }}>
							<h1 class="sm:text-3xl md:text-4xl lg:text-4xl font-medium leading-tight">
								Hi 👋 I'm Francesco and i am a
							</h1>
							<Typewriter mode="loop" cursor={true} delay={100}>
								{#each Object.entries(words) as [_, value]}
									<div>
										<h1 class="text-3xl sm:text-6xl md:text-6xl lg:text-8xl font-bold">{value}</h1>
									</div>
								{/each}
							</Typewriter>
						</div>
					{/if}
				</div>

				<div class="h-96 float-right w-full lg:w-[50%] z-10">
					{#if !loading}
						<div
							class="h-[45vh] sm:h-[60vh] md:h-[68vh] w-full z-10"
							transition:fly={{ delay: 500, duration: 1500, easing: cubicInOut, x: 1000, y: 0 }}
						>
							<Canvas
								shadows
								toneMapping={THREE.ACESFilmicToneMapping}
								rendererParameters={{ antialias: true }}
							>
								<SceneTeaShop />
							</Canvas>
						</div>
					{/if}
				</div>
			</div>
			<!--  -->
		</div>
	</main>

	{#if !loading}
		<div
			class="w-full lg:h-44 flex justify-center items-center pt-20 sm:pt-40 md:pt-52 sm:pb-8 md:pb-10 lg:pt-0"
			transition:fly={{ delay: 100, duration: 500, easing: circOut, x: 0, y: 200 }}
		>
			<a href="/about">
				<button type="button" class="btn btn-wide rounded-btn btn-accent"
					>Find out more about me</button
				></a
			>
		</div>
	{/if}
</div>

<style>
	:global(body) {
		margin: 0;
	}
</style>
