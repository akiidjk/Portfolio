<script lang="ts">
	import { onMount } from 'svelte';

	interface ShootingStar {
		id: number;
		x: number;
		y: number;
		angle: number;
		scale: number;
		speed: number;
		distance: number;
	}

	export let minSpeed: number = 10;
	export let maxSpeed: number = 30;
	export let minDelay: number = 1200;
	export let maxDelay: number = 4200;
	export let starColor: string = '#9E00FF';
	export let trailColor: string = '#2EB9DF';
	export let starWidth: number = 10;
	export let starHeight: number = 1;
	export let className: string = '';

	let star: ShootingStar | null = null;
	let svgRef: SVGSVGElement;

	function getRandomStartPoint() {
		const side = Math.floor(Math.random() * 4);
		const offset = Math.random() * window.innerWidth;

		switch (side) {
			case 0:
				return { x: offset, y: 0, angle: 45 };
			case 1:
				return { x: window.innerWidth, y: offset, angle: 135 };
			case 2:
				return { x: offset, y: window.innerHeight, angle: 225 };
			case 3:
				return { x: 0, y: offset, angle: 315 };
			default:
				return { x: 0, y: 0, angle: 45 };
		}
	}

	function createStar() {
		const { x, y, angle } = getRandomStartPoint();
		star = {
			id: Date.now(),
			x,
			y,
			angle,
			scale: 1,
			speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
			distance: 0
		};

		const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
		setTimeout(createStar, randomDelay);
	}

	function moveStar() {
		if (star) {
			const newX = star.x + star.speed * Math.cos((star.angle * Math.PI) / 180);
			const newY = star.y + star.speed * Math.sin((star.angle * Math.PI) / 180);
			const newDistance = star.distance + star.speed;
			const newScale = 1 + newDistance / 100;

			if (
				newX < -20 ||
				newX > window.innerWidth + 20 ||
				newY < -20 ||
				newY > window.innerHeight + 20
			) {
				star = null;
				return;
			}

			star = {
				...star,
				x: newX,
				y: newY,
				distance: newDistance,
				scale: newScale
			};
		}

		requestAnimationFrame(moveStar);
	}

	onMount(() => {
		createStar();
		moveStar();
	});
</script>

<svg bind:this={svgRef} class="w-full h-full absolute inset-0 {className}">
	{#if star}
		<rect
			x={star.x}
			y={star.y}
			width={starWidth * star.scale}
			height={starHeight}
			fill="url(#gradient)"
			transform={`rotate(${star.angle}, ${star.x + (starWidth * star.scale) / 2}, ${star.y + starHeight / 2})`}
		/>
	{/if}
	<defs>
		<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
			<stop offset="0%" stop-color={trailColor} stop-opacity="0" />
			<stop offset="100%" stop-color={starColor} stop-opacity="1" />
		</linearGradient>
	</defs>
</svg>
