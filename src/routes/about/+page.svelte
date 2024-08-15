<script lang="ts">
	import CheckIcon from '$lib/components/CheckIcon.svelte';
</script>

<main class="w-[80%] ms-auto me-auto">
	<ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
		<li>
			<div class="timeline-middle">
				<CheckIcon></CheckIcon>
			</div>
			<div class="timeline-start mb-10 md:text-end">
				<time class="font-mono italic">Time</time>
				<div class="text-lg font-black">Title</div>
				content
			</div>
			<hr />
		</li>
		<li>
			<hr />
			<div class="timeline-middle">
				<CheckIcon></CheckIcon>
			</div>
			<div class="timeline-end mb-10">
				<time class="font-mono italic">Time</time>
				<div class="text-lg font-black">Title</div>
				content
			</div>
			<hr />
		</li>
	</ul>
</main>
