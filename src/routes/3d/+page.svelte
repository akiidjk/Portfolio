<script lang="ts">
    import {Canvas} from '@threlte/core'
    import Scene from './Scene.svelte'
</script>


<style>
    :global(body) {
        margin: 0;
    }

    div {
        width: 100vw;
        height: 100vh;
    }
</style>


<div>
    <Canvas>
        <Scene/>
    </Canvas>
</div>

