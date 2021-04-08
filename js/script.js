// creating scene
const scene = new THREE.Scene();

// red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "#ff0000" });
const cubeMesh = new THREE.Mesh(geometry, material);

// sizes
const size = {
	width: 800,
	height: 500,
};

// camera – using perspective camera
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.x = 2;
camera.position.y = 1;
camera.position.z = 4;

// adding to the scene
scene.add(cubeMesh);
scene.add(camera);

// getting the canvas
const canvas = document.querySelector("canvas.webgl");

// renderer – render the scene from the camera perspective
const renderer = new THREE.WebGLRenderer({
	canvas,
});

renderer.setSize(size.width, size.height);
renderer.render(scene, camera);
