<script lang="ts">
	import { T } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';
	import { JapaneseTeaShop } from '$lib';
</script>

<!--npx @threlte/gltf@latest .\japanese_restaurant.glb --transform-->

<!-- Configurazione della telecamera prospettica con controlli orbitali -->
<T.PerspectiveCamera makeDefault position={[1, 1, 0]}>
	<OrbitControls
		enablePan={false}
		enableDamping
		maxDistance={10}
		minDistance={10}
		autoRotateSpeed={3.0}
	/>
</T.PerspectiveCamera>

<!-- Luce ambientale per illuminazione generale -->
<T.AmbientLight intensity={0.5} />
<T.DirectionalLight position={[15, 10, 10]} intensity={3} castShadow />
<T.DirectionalLight />
<T.PointLight position={[5, 5, 5]} intensity={1} castShadow />
<T.SpotLight position={[5, 5, 5]} angle={0.3} intensity={100} />

<JapaneseTeaShop scale={1.5} position={[0, -2, 0]} rotation={[0, 1.2, 0]} />
