'use strict';
import Candy3D from './module/candy-3d.module';
import objectJson from './mocks/mock-data.js';

import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js';

let candy = new Candy3D('app', {
    antialias: true,
    showHelpGrid: true,
    clearCoolr: 0x112233
}, objectJson);
candy.start();

//循环渲染界面
// let animation = function() {
//     if (TWEEN != null && typeof (TWEEN) != 'undefined') {
//         TWEEN.update();
//     }
//     requestAnimationFrame(animation);
//     candy.renderer.render(candy.scene, candy.camera);
// }
// animation();

/*
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

const animate = function () {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();
*/