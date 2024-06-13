<script>
    import {LightSwitch,} from "@skeletonlabs/skeleton";
    import {onMount} from 'svelte';
    import {Menu} from '@svelteuidev/core';
    import {BookmarkFilled, HamburgerMenu, Home, LockClosed, Person, Share1} from 'radix-icons-svelte';

    let width = 0;
    
    const updateDimensions = () => {
        width = window.innerWidth;
    };

    onMount(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    });

</script>

<nav class="fixed w-full z-20 shadow-lg flex">
    <div class="bg-transparent backdrop-blur-sm w-full h-20 flex justify-between items-center">
        <div class="mx-10 flex items-center">
            <img src="spidy.jpg" alt="Logo" class="w-14 h-14 rounded-full object-cover object-center mr-10"/>
            <h1 class="text-4xl font-medium">Akiidjk</h1>
        </div>
        <div class="flex mr-10">
            {#if width < 760}
                <Menu transitionOptions={{ y: 200 }}>
                    <button slot="control">
                        <HamburgerMenu size={24}/>
                    </button>
                    <Menu.Label>Menu</Menu.Label>
                    <Menu.Item icon={Home}><a class="mx-5" href="/">Home</a></Menu.Item>
                    <Menu.Item icon={Person}><a class="mx-5" href="/">About</a></Menu.Item>
                    <Menu.Item icon={BookmarkFilled}><a class="mx-5" href="/">Projects</a></Menu.Item>
                    <Menu.Item icon={Share1}><a class="mx-5" href="/">Contacts</a></Menu.Item>
                    <Menu.Item icon={LockClosed}><a class="mx-5" href="/">Admin</a></Menu.Item>
                    <Menu.Item>
                        <LightSwitch/>
                    </Menu.Item>
                </Menu>
            {:else}
                <a class="mx-5" href="/">Home</a>
                <a class="mx-5" href="/">About</a>
                <a class="mx-5" href="/">Projects</a>
                <a class="mx-5" href="/">Contacts</a>
                <a class="mx-5" href="/">Admin</a>
                <LightSwitch/>
            {/if}
        </div>
    </div>
</nav>
<div class="h-20"></div>