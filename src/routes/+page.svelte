<script lang="ts">
    import Typewriter from "svelte-typewriter";
    import {MultiStepLoader} from "$lib";
    import {IconSquareRoundedX} from "@tabler/icons-svelte";
    import {onMount} from 'svelte';

    let words: string[] = ["Developer", "CTF Player", "Student"]

    let loading = true;
    // let loading = false;
    let duration: number = 2000;
    const loadingStates = [
        {text: 'Booting'},
        {text: 'Loading I/O'},
        {text: 'Loading drivers'},
        {text: 'Loading operating system'},
        {text: 'Starting services'},
        {text: 'Loading user interface'},
        {text: 'Get config'},
        {text: 'Welcome in my cave'},
    ];


    onMount(() => {
        setTimeout(() => {
            loading = false;
        }, (duration * loadingStates.length));
    });

</script>

<!--https://www.npmjs.com/package/svelte-typewriter#installation-->
<!--keepCursorOnFinish={true}-->

<main class="w-full h-1/3">

    <MultiStepLoader {loadingStates} {loading} duration={duration} loop={false}/>

    {#if loading}
        <button
                class="fixed right-4 top-4 z-[120] text-black dark:text-white"
                on:click={() => {loading = false}}
        >
            <IconSquareRoundedX class="h-10 w-10"/>
        </button>
    {/if}


    <div class="max-w-xl ms-auto me-auto mt-52">
        <div>
            <Typewriter mode="loop" cursor={true} delay={100}>
                {#each Object.entries(words) as [_, value]}
                    <div>
                        <h1 class="text-8xl font-medium text-center">{value}</h1>
                    </div>
                {/each}
            </Typewriter>
        </div>
    </div>
</main>

