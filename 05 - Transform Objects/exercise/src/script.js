import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

///    Axes Helper  /////      (Vector3)

const axesHelper = new THREE.AxesHelper(3)  // the argument is the length of each axis helper
scene.add(axesHelper)



//// Positioning   ///////    (Vector3)

// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1

mesh.position.set(0.7, -0.6, 1)   //  .set()  combines all three axes into one function
scene.add(mesh)


/// Scale   ////           (Vector3)

// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5
mesh.scale.set(2,0.5,0.5)   /// you can use set here too


///  Rotation   ///////     (Euler)
        // Quaternion    expressed a rotation, but in a more mathematical way
        // updates when you change the rotation


mesh.rotation.reorder('YXZ')
//  rotation order is important, the first dimension declared has authority over other dimensions
//  you can change the order using reorder(...) method     object.rotation.reorder('yxz')
//  call it before making rotational changes

mesh.rotation.x = 
mesh.rotation.y = Math.PI / 2  ///  pi = half a rotation!  divide by 2 for a 45deg turn
mesh.rotation.z = 0











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


// camera.lookAt(mesh.position)


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)