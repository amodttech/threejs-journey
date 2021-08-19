const canvas = document.querySelector(".webgl")


//Scene
const scene = new THREE.Scene()

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({color: 0xff0000})

// A mesh is a combination og a geometry (the shape) and a material (how it looks)
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes =  {
    width: 800,
    height: 600
}

// camera
// PerspectiveCamera(the field of view (fov), aspect ratio (w/h))
//  field of view is in degrees
//  
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, )
camera.position.z = 3
camera.position.y = 2
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)

console.log(`geometry`, geometry)
console.log(`material`, material)