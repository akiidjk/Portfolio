<script>
	import { interpolate } from 'd3-interpolate';
	import { onMount } from 'svelte';

	export let x;
	export let y;
	export let width;
	export let height;

	let blobs_path = [
		'M266.3 -192.4C331.5 -130.7 361.2 -20.7 341.7 83.3C322.2 187.4 253.5 285.6 165.7 317.7C78 349.9 -28.9 315.9 -132.9 268.7C-236.8 221.4 -337.7 160.8 -364 74.8C-390.2 -11.2 -341.7 -122.5 -268.6 -186.1C-195.5 -249.6 -97.7 -265.4 1.4 -266.6C100.6 -267.7 201.2 -254.2 266.3 -192.4',
		'M247.9 -219.7C296.1 -137.2 292.8 -35.5 266.2 52.5C239.5 140.5 189.4 214.8 108.6 271.4C27.8 328 -83.7 366.7 -157 329.9C-230.3 293.1 -265.3 180.8 -269.4 84C-273.5 -12.8 -246.7 -94.1 -196.6 -177C-146.6 -259.9 -73.3 -344.5 13.3 -355C99.8 -365.6 199.6 -302.2 247.9 -219.7',
		'M267.2 -241.2C312.9 -155.8 293.6 -46.6 262 47.1C230.5 140.8 186.9 219.1 108.7 276.1C30.5 333.1 -82.1 368.8 -177 335.5C-271.9 302.1 -349 199.7 -367.1 91.9C-385.1 -15.8 -344.2 -128.9 -273.2 -220.1C-202.2 -311.3 -101.1 -380.6 4.8 -384.5C110.8 -388.3 221.5 -326.7 267.2 -241.2',
		'M292 -231.4C365.2 -141.2 401.9 -20.5 370.6 71.6C339.2 163.8 239.7 227.4 144.5 256.5C49.3 285.6 -41.5 280.2 -110.6 242.1C-179.6 204.1 -226.9 133.3 -252 49.9C-277.1 -33.5 -280.1 -129.6 -234.4 -213.5C-188.7 -297.5 -94.3 -369.2 7.6 -375.3C109.5 -381.3 218.9 -321.6 292 -231.4',
		'M242.2 -188.2C311.9 -105.8 365.1 -5.2 354.5 96.8C343.9 198.8 269.6 302.1 179 329.6C88.4 357.1 -18.5 308.7 -96.8 251.6C-175 194.4 -224.6 128.5 -244.4 52.7C-264.1 -23.1 -254 -108.8 -208.3 -185.8C-162.6 -262.7 -81.3 -330.8 2.5 -332.8C86.3 -334.8 172.5 -270.6 242.2 -188.2',
		'M297.2 -208.9C370.4 -145.4 404.5 -22.6 378.5 84.4C352.5 191.4 266.3 282.6 170.5 313.1C74.6 343.6 -30.8 313.2 -118.2 264C-205.5 214.8 -274.8 146.7 -294.2 66C-313.6 -14.8 -283.1 -108.1 -225.7 -168C-168.4 -228 -84.2 -254.6 13.9 -265.8C112.1 -276.9 224.1 -272.5 297.2 -208.9'
	];

	let currentIndex = Math.floor(Math.random() * blobs_path.length);
	let currentPath = blobs_path[currentIndex];

	function updatePath() {
		const nextIndex = Math.floor(Math.random() * blobs_path.length);
		const interpolator = interpolate(currentPath, blobs_path[nextIndex]);
		let t = 0;
		const duration = 5000;
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
		const interval = setInterval(updatePath, 5000);
		return () => clearInterval(interval);
	});
</script>

<div
	class="fixed z-[-1] blur"
	style={`top: ${y}px; left: ${x}px; width: ${width}px; height: ${height}px;`}
>
	<svg
		id="visual"
		viewBox="0 0 900 600"
		width="100%"
		height="100%"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		version="1.1"
	>
		<g transform="translate(431.7101407511372 281.32425478989546)">
			<path d={currentPath} fill="#C678DD"></path>
		</g>
	</svg>
</div>
