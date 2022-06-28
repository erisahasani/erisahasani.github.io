

// Fix camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 50, 100 );

// This fixes the renderer, no need to mess with it
var renderer = new THREE.WebGLRenderer(); // add in the argument { alpha: true } to make background invisible
renderer.setSize( window.innerWidth, window.innerHeight, 1, 1);
document.body.appendChild( renderer.domElement );

const geometry = new THREE.TorusGeometry( 10, 5, 70, 125 );
const material = new THREE.MeshLambertMaterial({color: 0x3C75A9});
var torus = new THREE.Mesh( geometry, material );

scene.add( torus );



camera.position.z = 95;

// Animation function that rotates object
const animate = function () {
    requestAnimationFrame( animate );

    torus.rotation.x -= 0.01;
    torus.rotation.y -= 0.012;
    torus.rotation.z -= 0.014;

    renderer.render( scene, camera );
};



const directionalLight = new THREE.DirectionalLight( 0xffffff, 1.9 );
scene.add( directionalLight );

animate();
