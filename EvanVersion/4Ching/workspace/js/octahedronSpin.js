var renderer 	= new THREE.WebGLRenderer({alpha: true, antialias: true});
var renderer2 	= new THREE.WebGLRenderer({alpha: true, antialias: true});

function init() {

	var scene = new THREE.Scene();
	var scene2	= new THREE.Scene();

	var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

	renderer.setClearColor(0x000000, 0);
	renderer.setSize($('#octahedronModel').innerWidth(), $('#octahedronModel').innerHeight());
	renderer.shadowMapEnabled = true;

	renderer2.setClearColor(0x000000, 0);
	renderer2.setSize($('#tetrahedronModel').innerWidth(), $('#tetrahedronModel').innerHeight());
	renderer2.shadowMapEnabled = true;

	document.getElementById('octahedronModel').appendChild(renderer.domElement);

	document.getElementById('tetrahedronModel').appendChild(renderer2.domElement);
	/*
	var mat = new THREE.MeshBasicMaterial({
		color: "black"
	});*/

	THREE.ImageUtils.crossOrigin = '';

	var loader = new THREE.TextureLoader();

	var loadedTexture = loader.load('./workspace/image/images.png');

	var polyhedronMat	= new THREE.MeshLambertMaterial({
			map: loadedTexture,
            polygonOffset: true,
            polygonOffsetFactor: 1,
            polygonOffsetUnits: 1 });
	var polyhedron = new THREE.Mesh(new THREE.OctahedronGeometry(10, 0), polyhedronMat);
	polyhedron.castShadow = true;

	var helper = new THREE.EdgesHelper(polyhedron, 0x000000);
	helper.material.linewidth = 2;
	scene.add(helper);

	scene.add(polyhedron);

	var polyhedronMat2	= new THREE.MeshLambertMaterial({color: 0xFFFFFF,
            polygonOffset: true,
            polygonOffsetFactor: 1,
            polygonOffsetUnits: 1 });
	var polyhedron2 = new THREE.Mesh(new THREE.TetrahedronGeometry(10, 0), polyhedronMat2);
	polyhedron2.castShadow = true;

	var helper2 = new THREE.EdgesHelper(polyhedron2, 0x000000);
	helper2.material.linewidth = 2;

	scene2.add(helper2);

	scene2.add(polyhedron2);

	camera.position.z = 30;

        



	var step = 0;

	var spotLight = new THREE.SpotLight(0xffffff);
	spotLight.position.set(0, 60, 60);
	spotLight.castShadow = true;
	scene.add(spotLight);

	var spotLight2 = new THREE.SpotLight(0xffffff);
	spotLight2.position.set(0, 60, 60);
	spotLight2.castShadow = true;
	scene2.add(spotLight2);

	render();

	function render() {
		polyhedron.rotation.y = step += 0.005;
		polyhedron2.rotation.y = step += 0.005;
		requestAnimationFrame(render);
		renderer.render(scene, camera);
		renderer2.render(scene2, camera);
	}

}

window.onload = init;
