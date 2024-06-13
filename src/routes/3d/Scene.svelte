<script>
    import {T, useFrame} from '@threlte/core';
    import {interactivity} from '@threlte/extras';
    import {spring} from 'svelte/motion';

    interactivity();

    const scale = spring(1);
    let rotation = 0;

    useFrame((_, delta) => {
        rotation += delta * 0.01; // Aggiungi un fattore di scala per la velocità di rotazione
    });
</script>

<T.PerspectiveCamera
        makeDefault
        position={[10, 10, 10]}
        on:create={({ ref }) => {
        ref.lookAt(0, 1, 0);
    }}
/>

<T.Mesh
        rotation={[0, rotation, 0]}
        position={[0, 1, 0]}
        scale={$scale}
        on:pointerenter={() => scale.set(1.5)}
        on:pointerleave={() => scale.set(1)}
>
    <T.BoxGeometry args={[1, 2, 1]}/>
    <T.MeshBasicMaterial color="hotpink"/>
</T.Mesh>
