<script lang="ts">
	import { onMount } from 'svelte';
	import { onDestroy } from 'svelte';

	interface StarProps {
		x: number;
		y: number;
		radius: number;
		opacity: number;
		twinkleSpeed: number | null;
	}

	export let starDensity: number = 0.00015;
	export let allStarsTwinkle: boolean = true;
	export let twinkleProbability: number = 0.7;
	export let minTwinkleSpeed: number = 0.5;
	export let maxTwinkleSpeed: number = 1;
	export let className: string = '';

	let stars: StarProps[] = [];
	let canvas: HTMLCanvasElement;

	function generateStars(width: number, height: number): StarProps[] {
		const area = width * height;
		const numStars = Math.floor(area * starDensity);
		return Array.from({ length: numStars }, () => {
			const shouldTwinkle = allStarsTwinkle || Math.random() < twinkleProbability;
			return {
				x: Math.random() * width,
				y: Math.random() * height,
				radius: Math.random() * 0.05 + 0.5,
				opacity: Math.random() * 0.5 + 0.5,
				twinkleSpeed: shouldTwinkle
					? minTwinkleSpeed + Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
					: null
			};
		});
	}

	onMount(() => {
		const updateStars = () => {
			if (canvas) {
				const ctx = canvas.getContext('2d');
				if (!ctx) return;

				const { width, height } = canvas.getBoundingClientRect();
				canvas.width = width;
				canvas.height = height;
				stars = generateStars(width, height);
			}
		};

		updateStars();

		const resizeObserver = new ResizeObserver(updateStars);
		if (canvas) {
			resizeObserver.observe(canvas);
		}

		const render = () => {
			if (!canvas) return;
			const ctx = canvas.getContext('2d');
			if (!ctx) return;

			ctx.clearRect(0, 0, canvas.width, canvas.height);
			stars.forEach((star) => {
				ctx.beginPath();
				ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
				ctx.fill();

				if (star.twinkleSpeed !== null) {
					star.opacity = 0.5 + Math.abs(Math.sin((Date.now() * 0.001) / star.twinkleSpeed) * 0.5);
				}
			});

			requestAnimationFrame(render);
		};

		render();

		return () => {
			resizeObserver.disconnect();
		};
	});
</script>

<canvas bind:this={canvas} class={`h-full w-full absolute inset-0 ${className}`} />
