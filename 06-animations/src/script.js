import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Time
// let time = Date.now()

// CLOCK
const clock = new THREE.Clock()

gsap.to(mesh.position, {duration: 1, delay: 1, x: 2})   ////  Green sock library.  This tells the mesh to move 2 x units
gsap.to(mesh.position, {duration: 1, delay: 1, x: 0})  /// this tells it to move back to 0

// Animations

const tick = () => {
    ////////  MANUAL FPS 
    // // Time
    // const currentTime = Date.now()
    // const deltaTime = currentTime - time  // this creates a universal framerate regtardless of the user's system framerate
    // time = currentTime
    // console.log(`deltaTime`, deltaTime)

    // const elapsedTime = clock.getElapsedTime()

    // //Update Objects
    // // mesh.rotation.x += 0.001 * deltaTime  // multiplying by deltatime gives it a stable framerate
    // mesh.position.y = Math.sin(elapsedTime)
    // mesh.position.x = Math.cos(elapsedTime)
    // Render
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()