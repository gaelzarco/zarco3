import '../style.css'
import * as THREE from 'three'

let display = document.querySelector('.display')

let displayCounter = 0

function updateDisplayFunc() {
    if (displayCounter === 0) {
        updateDisplay()
        displayCounter++
    } else {
        updateDisplay2()
        displayCounter++
    }
}

function home() {
    window.location.reload()
}

let nextButton = document.createElement('button')
nextButton.setAttribute('id', 'nextbttn')
nextButton.innerText = 'NEXT'
display.append(nextButton)

document.getElementById('nextbttn').addEventListener('click', updateDisplayFunc)

function updateDisplay() {
    document.getElementById('title').remove()
    document.getElementById('intro').remove()
    document.getElementById('nextbttn').remove()

    let aboutMeTitle = document.createElement('h2')
    aboutMeTitle.setAttribute('id', 'aboutmetitle')
    aboutMeTitle.innerText = 'About'
    display.append(aboutMeTitle)

    let aboutMe = document.createElement('p')
    aboutMe.setAttribute('id', 'aboutme')
    aboutMe.innerText = "Welcome to my portfolio, I am a recent Software Development bootcamp graduate from UNLV and I have been programming for over a year now. I love working on front-end projects, including UI/UX, but am profecient and experienced at creating full-stack web applications, back-end servers, and RESTful API's. Beyond JavaScript, CSS, and HTML, I am familiar with Python and some of its web development frameworks such as Flask. Having worked 3 years of food service, it is easy to say that a full-stack app and a restaurant are not as different as they may seem."
    display.append(aboutMe)

    let mySkillsTitle = document.createElement('h2')
    mySkillsTitle.setAttribute('id', 'myskillstitle')
    mySkillsTitle.innerText = 'Skills'
    display.append(mySkillsTitle)

    let python = document.createElement('img')
    python.setAttribute('class', 'skills')
    python.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-512%2Fpython-1-226045.png&f=1&nofb=1' 
    python.alt = 'Python icon'

    let javascript = document.createElement('img')
    javascript.setAttribute('class', 'skills')
    javascript.src = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fassist-software.net%2Fsites%2Fdefault%2Ffiles%2Fpromoted_images%2Fblog%2Fjavascript_logo.png&f=1&nofb=1' 
    javascript.alt = 'Javascript icon'

    let nodeJS = document.createElement('img')
    nodeJS.setAttribute('class', 'skills')
    nodeJS.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Fthumbs%2F2x%2Fnodejs-logo.png&f=1&nofb=1' 
    nodeJS.alt = 'NodeJS icon'

    let gitHub = document.createElement('img')
    gitHub.setAttribute('class', 'skills')
    gitHub.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Fthumbs%2F2x%2Fgit-logo.png&f=1&nofb=1' 
    gitHub.alt = 'gitHub icon'

    let postgreSQL = document.createElement('img')
    postgreSQL.setAttribute('class', 'skills')
    postgreSQL.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fopensource.com%2Fsites%2Fdefault%2Ffiles%2Fpostgresql.png&f=1&nofb=1'
    postgreSQL.alt = 'PostgreSQL icon'

    let express = document.createElement('img')
    express.setAttribute('class', 'skills')
    express.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimages%2Fexpress-js-icon-20.png&f=1&nofb=1'
    express.alt = 'Express icon'

    let react = document.createElement('img')
    react.setAttribute('class', 'skills')
    react.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcloud.netlifyusercontent.com%2Fassets%2F344dbf88-fdf9-42bb-adb4-46f01eedd629%2F064fc70f-5df3-4333-b9d4-f6abe2f946de%2Freact-wp-app8.png&f=1&nofb=1'
    react.alt = 'React icon'

    let mongoDB = document.createElement('img')
    mongoDB.setAttribute('class', 'skills')
    mongoDB.src = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fassets.stickpng.com%2Fthumbs%2F58481021cef1014c0b5e494b.png&f=1&nofb=1'
    mongoDB.alt = 'MongoDB icon'

    let br = document.createElement('br')
    br.setAttribute('id', 'oldbr')

    display.append(react)
    display.append(python)
    display.append(javascript)
    display.append(nodeJS)
    display.append(gitHub)
    display.append(express)
    display.append(mongoDB)
    display.append(postgreSQL)

    display.append(br)
    display.append(nextButton)
}

function updateDisplay2() {
    document.getElementById('nextbttn').remove()
    document.getElementById('oldbr').remove()
    document.getElementById('myskillstitle').remove()
    document.getElementById('aboutmetitle').remove()
    document.getElementById('aboutme').remove()
    document.querySelectorAll('.skills').forEach(e => e.remove())

    let homeButton = document.createElement('button')
    homeButton.setAttribute('id', 'nextbttn')
    homeButton.innerText = 'HOME'

    let projectDiv = document.createElement('div')
    projectDiv.setAttribute('class', 'projectDiv')

    let projectA = document.createElement('a')
    projectA.setAttribute('class', 'projects')
    projectA.setAttribute('href', 'https://audix.up.railway.app/')
    projectA.setAttribute('target', '_blank')
    projectA.innerText = 'Audix' 

    let projectADesc = document.createElement('p')
    projectADesc.setAttribute('class', 'projectdesc')
    projectADesc.innerText = 'This a solo-project of mine meant to replicate Receiptify with a few more features. Built with React and a Express/Nodejs backend. Originally used a Python/Flask server but compatibility issues made me switch. Code to both is available on GitHub repo.'

    let projectDiv2 = document.createElement('div')
    projectDiv2.setAttribute('class', 'projectDiv')

    let projectB = document.createElement('a')
    projectB.setAttribute('class', 'projects')
    projectB.setAttribute('href', 'https://gaelzarco.github.io/SpaceShooter/')
    projectB.setAttribute('target', '_blank')
    projectB.innerText = 'Space Shooter' 

    let projectBDesc = document.createElement('p')
    projectBDesc.setAttribute('class', 'projectdesc')
    projectBDesc.innerText = 'The first milestone project in my coding journey. A 2-D vanilla JavaScript shooter for devices with keyboards.'

    let projectDiv3 = document.createElement('div')
    projectDiv3.setAttribute('class', 'projectDiv')

    let projectC = document.createElement('a')
    projectC.setAttribute('class', 'projects')
    projectC.setAttribute('href', 'https://github.com/gaelzarco/UNLV-SD-FINAL')
    projectC.setAttribute('target', '_blank')
    projectC.innerText = 'Mock E-Commerce' 

    let projectCDesc = document.createElement('p')
    projectCDesc.setAttribute('class', 'projectdesc')
    projectCDesc.style.paddingBottom = '20px'
    projectCDesc.innerText = 'Final milestone project for the UNLV bootcamp I attended. Created using MERN-stack and features cart functionality for the user.'

    projectDiv.appendChild(projectA)
    projectDiv.appendChild(projectADesc)
    display.append(projectDiv)

    let br = document.createElement('br')
    let br2 = document.createElement('br')

    display.append(br)

    projectDiv2.appendChild(projectB)
    projectDiv2.appendChild(projectBDesc)
    display.append(projectDiv2)

    display.append(br2)

    projectDiv3.appendChild(projectC)
    projectDiv3.appendChild(projectCDesc)
    display.append(projectDiv3)

    display.append(homeButton)

    document.getElementById('nextbttn').addEventListener('click', home)
}

// Loading
const textureLoader = new THREE.TextureLoader()

const normalTexture = textureLoader.load('NormalMap.png')

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects
const geometry = new THREE.SphereGeometry(.75, 128, 128)

// Materials
const material = new THREE.MeshStandardMaterial()
material.metalness = 1
material.roughness = 0.2
material.normalMap = normalTexture

// Mesh
const sphere = new THREE.Mesh(geometry,material)
scene.add(sphere)

// Light 1
const pointLight = new THREE.PointLight(0xffffff, 0.1)
pointLight.position.set(2, 3, 4)
scene.add(pointLight)

// Light 2
const pointLight2 = new THREE.PointLight(0xff0000, 2)
pointLight2.position.set(-1.86, 1, -1.65)
pointLight2.intensity = 10

scene.add(pointLight2)

// Light 3
const pointLight3 = new THREE.PointLight(0xe1ff, 2)
pointLight3.position.set(2.13, -3, -1.98)
pointLight3.intensity = 6.8

scene.add(pointLight3)

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Animate
const updateSphere = (e) => {
    sphere.position.y = (e.clientY - windowY) * -0.00005
    sphere.position.x = (e.clientX - windowX) * 0.00005
}

window.addEventListener('mousemove', updateSphere)

let windowX = window.innerWidth
let windowY = window.innerHeight

const clock = new THREE.Clock()
const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    //Update window size
    windowX = window.innerWidth/2
    windowY = window.innerHeight/2

    // Update objects
    sphere.rotation.y = .12 * elapsedTime
    sphere.rotation.x = .1 * elapsedTime
    sphere.rotation.z = .15 * elapsedTime

    // Render
    renderer.render(scene, camera)

    // Call tick again on next frame
    window.requestAnimationFrame(tick)
}

tick()