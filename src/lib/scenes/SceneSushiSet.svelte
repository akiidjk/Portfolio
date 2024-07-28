<script>
	import { T } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';
	import { SushiSet } from '$lib';
</script>

<!--npx @threlte/gltf@latest .\japanese_restaurant.glb &#45;&#45;transform-->

<!-- Configurazione della telecamera prospettica con controlli orbitali -->
<T.PerspectiveCamera makeDefault position={[1, 1, 0]}>
	<OrbitControls
		enablePan={false}
		enableDamping
		maxDistance={10}
		minDistance={10}
		autoRotate
		autoRotateSpeed={3.0}
	/>
	<!--	-->
</T.PerspectiveCamera>

<!-- Luce ambientale per illuminazione generale -->
<T.AmbientLight intensity={0.8} color={'#fff'} />

<!-- Luce direzionale per illuminazione direzionale -->
<T.DirectionalLight position={[10, 10, 5]} intensity={0.5} />
<!--<Sky/>-->

<SushiSet scale={0.6} position={[0, -2, 0]} rotation={[0, 1.2, 0]} />
<!--<T.GridHelper />-->
