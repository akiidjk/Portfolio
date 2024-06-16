<script>
	import { T } from '@threlte/core';
	import { OrbitControls, Sky } from '@threlte/extras';
	import { Porsche911 } from '$lib';
</script>

<!--npx @threlte/gltf@latest .\japanese_restaurant.glb &#45;&#45;transform-->

<!-- Configurazione della telecamera prospettica con controlli orbitali -->
<T.PerspectiveCamera makeDefault position={[1, 1, 0]}>
	<OrbitControls
		allowPan={false}
		enableDamping
		maxDistance={200}
		minDistance={10}
		autoRotate
		autoRotateSpeed={1.0}
	/>
</T.PerspectiveCamera>

<Sky />

<!-- Modello Porsche911 -->
<Porsche911 />

<!--<T.GridHelper />-->
