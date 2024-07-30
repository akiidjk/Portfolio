<script lang="ts">
	import Typewriter from 'svelte-typewriter';
	import { MultiStepLoader, SceneTeaShop } from '$lib';
	import { IconSquareRoundedX } from '@tabler/icons-svelte';
	import { onMount } from 'svelte';
	import { Canvas } from '@threlte/core';
	import { fly } from 'svelte/transition';
	import { circOut } from 'svelte/easing';
	import Blob from '$lib/components/Blob.svelte';
	import * as THREE from 'three';

	let words: string[] = ['Developer', 'CTF Player', 'Student', 'IT enthusiast'];

	let loading = false;
	let duration: number = 1000;
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
		}, duration * loadingStates.length);
	});
</script>

<div>
	<main class="w-full h-2/3 bg-gradient-to-b from-surface-600 to-surface-900">
		<Blob width="1140" height="500" x="1000" y="-100" />
		<Blob width="1140" height="500" x="-200" y="600" />

		<div>
			<MultiStepLoader {loadingStates} {loading} {duration} loop={false} />
			{#if loading}
				<button
					class="fixed right-4 top-4 z-[120] text-black dark:text-white"
					on:click={() => {
						loading = false;
					}}
				>
					<IconSquareRoundedX class="h-10 w-10" />
				</button>
			{/if}

			<div class="flex w-full float-left">
				<div class="mt-52 w-[50%] p-11 flex">
					{#if !loading}
						<div transition:fly={{ delay: 550, duration: 1000, easing: circOut, x: -1000, y: 0 }}>
							<h1 class="text-4xl font-medium leading-tight">Hi 👋 I'm Francesco and i am a</h1>
							<Typewriter mode="loop" cursor={true} delay={100}>
								{#each Object.entries(words) as [_, value]}
									<div>
										<h1 class="text-8xl font-bold">{value}</h1>
									</div>
								{/each}
							</Typewriter>
						</div>
					{/if}
				</div>

				<div class="w-[50%] float-right">
					{#if !loading}
						<div
							class="container_house"
							transition:fly={{ delay: 550, duration: 1000, easing: circOut, x: 1000, y: 0 }}
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
		</div>
	</main>

	{#if !loading}
		<div
			class="w-full h-44 flex justify-center items-center"
			transition:fly={{ delay: 550, duration: 700, easing: circOut, x: 0, y: 1000 }}
		>
			<button type="button" class="btn variant-filled">Find out more about me</button>
		</div>
	{/if}
</div>

<style>
	:global(body) {
		margin: 0;
	}

	.container_house {
		height: 68vh;
	}

	/* .blur_background {
		background-image: url('blurry-gradient.png');
	} */
</style>
