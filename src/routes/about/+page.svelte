<script lang="ts">
	import { StarsBackground, ShootingStars } from '$lib';
	import { fade, fly } from 'svelte/transition';

	import CheckIcon from '$lib/components/CheckIcon.svelte';
	import { quadInOut, sineOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let loading: boolean = true;

	onMount(() => {
		setTimeout(() => {
			loading = false;
		}, 200);
	});
</script>

<header class="w-full h-20 p-20">
	{#if !loading}
		<div transition:fade={{ delay: 200, duration: 500, easing: sineOut }}>
			<h1 class="w-[100%] text-center font-bold text-[3em] ms-auto me-auto">
				My Evolution in the IT World: Passion and Projects
			</h1>
		</div>
	{/if}
</header>
<main class="w-[80%] ms-auto me-auto">
	<ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
		<li>
			<div class="timeline-middle">
				<CheckIcon></CheckIcon>
			</div>
			{#if !loading}
				<div
					class="timeline-start mb-10 md:text-end"
					transition:fly={{ delay: 400, duration: 1200, easing: quadInOut, x: -1000, y: 0 }}
				>
					<time class="font-mono italic">2021</time>
					<div class="text-lg font-black">The First Bases</div>
					<p>
						I started my journey into the world of computer science in 2021, during my sophomore
						year of high school. Initially, I devoted myself to learning the basics of HTML and CSS,
						and then quickly continued with the study of Python, my first real programming language.
						At the same time, I also started learning the C language, thus improving my skills in
						computer science and laying the foundation for my future path.
					</p>
				</div>
			{/if}

			<hr />
		</li>
		<li>
			<hr />
			<div class="timeline-middle">
				<CheckIcon></CheckIcon>
			</div>
			{#if !loading}
				<div
					transition:fly={{ delay: 550, duration: 1200, easing: quadInOut, x: 1000, y: 0 }}
					class="timeline-end mb-10"
				>
					<time class="font-mono italic">2021/2022</time>
					<div class="text-lg font-black">First Important Project</div>
					During the summer between my sophomore and junior year of high school, I decided to take more
					serious about my education and embarked on an ambitious project called
					<a class="underline" href="https://github.com/ProjecVirgil" target="_blank"
						>ProjectVirgil</a
					>
					. This project allowed me to make a big leap forward in just three months. I began to explore
					various aspects of software engineering, learning how to create, structure, and maintain a
					project. I deepened my use of Git and GitHub, using them more and more efficiently, and began
					exploring web development with technologies such as React, Angular and Next.js, as well as
					development
					<a class="underline" href="https://github.com/ProjecVirgil/VirgilApp" target="_blank"
						>mobile</a
					> with Dart. In addition, I undertook the study of object-oriented programming with Java, better
					preparing me for the start of my junior year of high school.
				</div>
			{/if}

			<hr />
		</li>
		<li>
			<hr />
			<div class="timeline-middle">
				<CheckIcon></CheckIcon>
			</div>
			{#if !loading}
				<div
					class="timeline-start mb-10"
					transition:fly={{ delay: 675, duration: 1200, easing: quadInOut, x: -1000, y: 0 }}
				>
					<time class="font-mono italic">2022/2023</time>
					<div class="text-lg font-black">Expansion of Skills</div>
					During this time, I continued to work on ProjectVirgil, managing to complete an Android app
					and two websites, one of which was dedicated to monitoring and the other to presentation. This
					led me to further my studies, especially in the field of databases, where I started working
					with MongoDB and PostgreSQL. Through my participation in the
					<a class="underline" href="https://cyberchallenge.it/" target="_blank">
						CyberChallenge 2023</a
					> project, I entered the world of cybersecurity and CTF (Capture The Flag) competitions, an
					experience that significantly expanded my knowledge in web, network and software security,
					with a focus on memory management and assembly. This path also brought me closer to academia,
					leading me to participate in the final stages of the team competition.
				</div>
			{/if}
			<hr />
		</li>
		<li>
			<hr />
			<div class="timeline-middle">
				<CheckIcon></CheckIcon>
			</div>
			{#if !loading}
				<div
					class="timeline-end mb-10"
					transition:fly={{ delay: 750, duration: 1200, easing: quadInOut, x: 1000, y: 0 }}
				>
					<time class="font-mono italic">2023/2024</time>
					<div class="text-lg font-black">New challenges</div>
					Over the past year, I have continued to develop several projects, exploring new programming
					languages such as Rust and Go, and significantly improving my mastery of Python. I implemented
					a complete project, using Rust for the backend and React for the frontend, with the integration
					of Redis as the database. In parallel, I continued my journey in the field of cybersecurity,
					continuing to expand and refine my skills in this ever-evolving field.
				</div>
			{/if}

			<hr />
		</li>
	</ul>

	<StarsBackground></StarsBackground>
	<ShootingStars></ShootingStars>
</main>
