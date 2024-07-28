<script lang="ts">
	import Typewriter from 'svelte-typewriter';
	import { MultiStepLoader, SceneTeaShop } from '$lib';
	import { IconSquareRoundedX } from '@tabler/icons-svelte';
	import { onMount } from 'svelte';
	import { Canvas } from '@threlte/core';
	import { fly } from 'svelte/transition';
	import { circOut } from 'svelte/easing';
	import { interpolate } from 'd3-interpolate';
	import * as THREE from 'three';
	import { transform } from 'svelte-motion';

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

	let blobs_path = [
		'M266.3 -192.4C331.5 -130.7 361.2 -20.7 341.7 83.3C322.2 187.4 253.5 285.6 165.7 317.7C78 349.9 -28.9 315.9 -132.9 268.7C-236.8 221.4 -337.7 160.8 -364 74.8C-390.2 -11.2 -341.7 -122.5 -268.6 -186.1C-195.5 -249.6 -97.7 -265.4 1.4 -266.6C100.6 -267.7 201.2 -254.2 266.3 -192.4',
		'M247.9 -219.7C296.1 -137.2 292.8 -35.5 266.2 52.5C239.5 140.5 189.4 214.8 108.6 271.4C27.8 328 -83.7 366.7 -157 329.9C-230.3 293.1 -265.3 180.8 -269.4 84C-273.5 -12.8 -246.7 -94.1 -196.6 -177C-146.6 -259.9 -73.3 -344.5 13.3 -355C99.8 -365.6 199.6 -302.2 247.9 -219.7',
		'M267.2 -241.2C312.9 -155.8 293.6 -46.6 262 47.1C230.5 140.8 186.9 219.1 108.7 276.1C30.5 333.1 -82.1 368.8 -177 335.5C-271.9 302.1 -349 199.7 -367.1 91.9C-385.1 -15.8 -344.2 -128.9 -273.2 -220.1C-202.2 -311.3 -101.1 -380.6 4.8 -384.5C110.8 -388.3 221.5 -326.7 267.2 -241.2',
		'M292 -231.4C365.2 -141.2 401.9 -20.5 370.6 71.6C339.2 163.8 239.7 227.4 144.5 256.5C49.3 285.6 -41.5 280.2 -110.6 242.1C-179.6 204.1 -226.9 133.3 -252 49.9C-277.1 -33.5 -280.1 -129.6 -234.4 -213.5C-188.7 -297.5 -94.3 -369.2 7.6 -375.3C109.5 -381.3 218.9 -321.6 292 -231.4',
		'M242.2 -188.2C311.9 -105.8 365.1 -5.2 354.5 96.8C343.9 198.8 269.6 302.1 179 329.6C88.4 357.1 -18.5 308.7 -96.8 251.6C-175 194.4 -224.6 128.5 -244.4 52.7C-264.1 -23.1 -254 -108.8 -208.3 -185.8C-162.6 -262.7 -81.3 -330.8 2.5 -332.8C86.3 -334.8 172.5 -270.6 242.2 -188.2',
		'M297.2 -208.9C370.4 -145.4 404.5 -22.6 378.5 84.4C352.5 191.4 266.3 282.6 170.5 313.1C74.6 343.6 -30.8 313.2 -118.2 264C-205.5 214.8 -274.8 146.7 -294.2 66C-313.6 -14.8 -283.1 -108.1 -225.7 -168C-168.4 -228 -84.2 -254.6 13.9 -265.8C112.1 -276.9 224.1 -272.5 297.2 -208.9'
	];

	let currentPath = blobs_path[0];
	let currentIndex = 0;

	// Todo randomize next index
	function updatePath() {
		const nextIndex = (currentIndex + 1) % blobs_path.length;
		console.log(nextIndex);
		const interpolator = interpolate(currentPath, blobs_path[nextIndex]);
		let t = 0;
		const duration = 80000;
		const step = 16;

		function animate() {
			t += step / duration;
			if (t > 1) t = 1;
			currentPath = interpolator(t);
			if (t < 1) {
				requestAnimationFrame(animate);
			} else {
				currentIndex = nextIndex;
			}
		}

		requestAnimationFrame(animate);
	}

	onMount(() => {
		setTimeout(() => {
			loading = false;
		}, duration * loadingStates.length);
		const interval = setInterval(updatePath, 1000);
		return () => clearInterval(interval);
	});
</script>

<div class="blur_background">
	<main class="w-full h-2/3 bg-gradient-to-b from-surface-600 to-surface-900">
		<div class="absolute top-0 z-[-1] blur">
			<svg
				id="visual"
				viewBox="0 0 900 600"
				width="500"
				height="500"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				version="1.1"
			>
				<g transform="translate(431.7101407511372 281.32425478989546)">
					<path d={currentPath} fill="#C678DD"></path>
				</g>
			</svg>
		</div>

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

	.blur_background {
		/* background-image: url('blurry-gradient.png'); */
	}
</style>
