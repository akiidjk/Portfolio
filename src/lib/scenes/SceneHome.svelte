<script>
	import { T } from '@threlte/core';
	import { OrbitControls, Sky } from '@threlte/extras';
	import { JapaneseRestaurant, Porsche911 } from '$lib';
</script>

<!--npx @threlte/gltf@latest .\japanese_restaurant.glb &#45;&#45;transform-->

<!-- Configurazione della telecamera prospettica con controlli orbitali -->
<T.PerspectiveCamera makeDefault position={[1, 1, 0]}>
	<OrbitControls
		allowPan={false}
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
<!--&lt;!&ndash; Modello Porsche911 &ndash;&gt;-->
<!--<Porsche911 />-->

<JapaneseRestaurant scale={0.38} position={[0, -2, 0]} rotation={[0, 1.2, 0]} />
<!--<T.GridHelper />-->
