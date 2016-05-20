var renderer 	= new THREE.WebGLRenderer({alpha: true, antialias: true});
var renderer2 	= new THREE.WebGLRenderer({alpha: true, antialias: true});
var renderer3 	= new THREE.WebGLRenderer({alpha: true, antialias: true});
var renderer4 	= new THREE.WebGLRenderer({alpha: true, antialias: true});

function init() {

	var scene 	= new THREE.Scene();
	var scene2	= new THREE.Scene();
	var scene3	= new THREE.Scene();
	var scene4	= new THREE.Scene();

	var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

	renderer.setClearColor(0x000000, 0);
	renderer.setSize($('#octahedronModel').innerWidth(), $('#octahedronModel').innerHeight());
	renderer.shadowMapEnabled = true;

	renderer2.setClearColor(0x000000, 0);
	renderer2.setSize($('#pyramidModel').innerWidth(), $('#pyramidModel').innerHeight());
	renderer2.shadowMapEnabled = true;

	renderer3.setClearColor(0x000000, 0);
	renderer3.setSize($('#pyramidModel').innerWidth(), $('#pyramidModel').innerHeight());
	renderer3.shadowMapEnabled = true;

	renderer4.setClearColor(0x000000, 0);
	renderer4.setSize($('#pyramidModel').innerWidth(), $('#pyramidModel').innerHeight());
	renderer4.shadowMapEnabled = true;

	document.getElementById('octahedronModel').appendChild(renderer.domElement);

	document.getElementById('pyramidModel').appendChild(renderer2.domElement);

	document.getElementById('squareModel').appendChild(renderer3.domElement);

	document.getElementById('rectangleModel').appendChild(renderer4.domElement);

	var polyhedronMat	= new THREE.MeshLambertMaterial({
			color: 0xffffff,
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

	var polyhedronMat3	= new THREE.MeshLambertMaterial({
			color: 0xffffff,
            polygonOffset: true,
            polygonOffsetFactor: 1,
            polygonOffsetUnits: 1 });
	var polyhedron3 = new THREE.Mesh(new THREE.BoxGeometry(10, 5, 10), polyhedronMat3);
	polyhedron3.castShadow = true;

	var helper3 = new THREE.EdgesHelper(polyhedron3, 0x000000);
	helper3.material.linewidth = 2;
	scene3.add(helper3);

	scene3.add(polyhedron3);

	var polyhedronMat4	= new THREE.MeshLambertMaterial({
			color: 0xffffff,
            polygonOffset: true,
            polygonOffsetFactor: 1,
            polygonOffsetUnits: 1 });
	var polyhedron4 = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10), polyhedronMat4);
	polyhedron4.castShadow = true;

	var helper4 = new THREE.EdgesHelper(polyhedron4, 0x000000);
	helper4.material.linewidth = 2;
	scene4.add(helper4);

	scene4.add(polyhedron4);

	camera.position.z = 28;

	var step = 0;

	var spotLight = new THREE.SpotLight(0xffffff);
	spotLight.position.set(0, 60, 60);
	spotLight.castShadow = true;
	scene.add(spotLight);

	var spotLight2 = new THREE.SpotLight(0xffffff);
	spotLight2.position.set(0, 60, 60);
	spotLight2.castShadow = true;
	scene2.add(spotLight2);

	var spotLight3 = new THREE.SpotLight(0xffffff);
	spotLight3.position.set(0, 60, 60);
	spotLight3.castShadow = true;
	scene3.add(spotLight3);

	var spotLight4 = new THREE.SpotLight(0xffffff);
	spotLight4.position.set(0, 60, 60);
	spotLight4.castShadow = true;
	scene4.add(spotLight4);

	render();

	function render() {
		polyhedron.rotation.y = step += 0.005;
		polyhedron2.rotation.y = step += 0.005;
		polyhedron3.rotation.y = step += 0.005;
		polyhedron4.rotation.y = step += 0.005;
		requestAnimationFrame(render);
		renderer.render(scene, camera);
		renderer2.render(scene2, camera);
		renderer3.render(scene3, camera);
		renderer4.render(scene4, camera);
	}
}

window.onload = init;




/*


    var	group = new THREE.Group();

	var loader = new THREE.TextureLoader();

	scene.add(group);

	THREE.ImageUtils.crossOrigin = '';

	loader.load('./workspace/image/octahedron.png', function (
		texture ) {

		var geometry = new THREE.BoxGeometry( 50, 50, 50);
		var material = new THREE.MeshFaceMaterial([
		    new THREE.MeshNormalMaterial({
		        map: texture
		    }),
		    new THREE.MeshBasicMaterial({
		        map: texture
		    }),
		    new THREE.MeshBasicMaterial({
		      /*  color: 0x0000ff,*/
	/*	        map: texture
		    }),
		    new THREE.MeshBasicMaterial({
		        map: texture
		    }),
		    new THREE.MeshBasicMaterial({
		        map: texture
		    }),
		    new THREE.MeshBasicMaterial({
		        map: texture
		    })
		]);

		var mesh = new THREE.Mesh( geometry, material);

		group.add( mesh );
		}
	);*/

