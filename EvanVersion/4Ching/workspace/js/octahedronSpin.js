var renderer = new THREE.WebGLRenderer({alpha: true});


function init() {

	var scene = new THREE.Scene();

	var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

	renderer.setClearColor(0x000000, 0);
	renderer.setSize($('#octahedronModel').innerWidth(), $('#octahedronModel').innerHeight());
	
	var mat = new THREE.MeshBasicMaterial({
		color: "black"
	});

	polyhedron = new THREE.Mesh(new THREE.OctahedronGeometry(10, 0), mat);

	scene.add(polyhedron);

	camera.position.z = 30;
        
	document.getElementById('octahedronModel').appendChild(renderer.domElement);

	var step = 0;

	render();

	function render() {
		polyhedron.rotation.y = step += 0.01;
		requestAnimationFrame(render);
		renderer.render(scene, camera);
	}

}

window.onload = init;
