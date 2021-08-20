import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */

// There are 4 properties to transform objects
    // position
    // scale
    // rotation
    // quaternion (also rotates the object)

    // These properties will be compiled in matrices

// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)

// // object transformations can go anywhere in the program as long as it comes before the renderer
// mesh.position.z = 0
// mesh.position.y = 1
// mesh.position.x = 1

// scene.add(mesh)

// // SCALE
// mesh.scale.set(0.2, 0.5, 1)

// // ROTATION
// mesh.rotation.reorder('YXZ') // this will make the rotations render in this order specified

// mesh.rotation.x = 1
// mesh.rotation.y = Math.PI  //Math.PI allows you to do a half rotation

const group = new THREE.Group()

scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0x00ff00})
)
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0x0000ff})
)
cube2.position.x = 2
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0xff0000})
)
cube3.position.x = -2
group.add(cube3)

group.position.y = 1
group.scale.y = 2
group.rotation.y = 1

//Axes Helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Look At

// camera.lookAt(mesh.position)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)