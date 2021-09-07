'use strict';
import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default class Candy3D {
  constructor() {
    this.scene = null;  //场景
    this.camera = null; //相机
    this.renderer = null; //渲染器
  }
  start() {
    this._initScene();//创建场景 

    this._initCamera(); //初始化摄像机 

    this._initLight();//灯光布置
    this._initRenderer(); //初始化渲染器 

    this.createFloor();//创建地板
    this.createCubeWall();  //创建墙体
    this._createRack2();  //创建机柜
    this._createServer(); //创建服务器

    this.initMouseCtrl();//创建鼠标控制器 

    this.animation();//循环渲染界面
  }
  /*初始化渲染器
    antialias: 抗锯齿
  */
  _initRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor('#39609B');//背景色
    document.body.appendChild(this.renderer.domElement);

    //事件 
    this.renderer.domElement.addEventListener('dblclick', (ev) => {
      this._openDoor(ev);
    }, false);
    // this.renderer.domElement.addEventListener('mousemove', (element, ev) => {
    //   console.log(element);
    //   console.log(ev);
    // }, false);
  }

  //初始化摄像机
  _initCamera() {
    this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 2000);
    this.camera.position.x = 0;
    this.camera.position.y = 250;
    this.camera.position.z = 300;
  }
  //创建场景
  _initScene() {
    this.scene = new THREE.Scene();
  }
  /* 创建灯光
   AmbientLight: 环境光，基础光源，它的颜色会被加载到整个场景和所有对象的当前颜色上。 
   PointLight：点光源，朝着所有方向都发射光线 
   SpotLight ：聚光灯光源：类型台灯，天花板上的吊灯，手电筒等 
   DirectionalLight：方向光，又称无限光，从这个发出的光源可以看做是平行光. 
   */
  _initLight() {
    let light2 = new THREE.DirectionalLight(0xffffff);
    light2.position.set(300, 400, 200);
    // light2.castShadow = true;//表示这个光是可以产生阴影的 
    this.scene.add(light2);
    let light = new THREE.AmbientLight(0x444444);
    this.scene.add(light);
  }

  //循环渲染界面
  animation() {
    if (TWEEN != null && typeof (TWEEN) != 'undefined') {
      TWEEN.update();
    }
    requestAnimationFrame(() => { this.animation() });
    this.renderer.render(this.scene, this.camera);
  }
  //创建鼠标控制器
  initMouseCtrl() {
    // 
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    // this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    // this.controls.addEventListener('change', (ev) => {
    //   console.log(ev);
    // });
    // this.controls.addEventListener('click', (ev) => {
    //   console.log(ev);
    // })
  }

  //创建地板
  createFloor() {
    // return this.createCube(obj);
    let loader = new THREE.TextureLoader();
    loader.load('../img/floor.png', (texture) => {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(10, 10);
      let floorGeometry = new THREE.BoxGeometry(400, 2, 300);
      let floorMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide
      });
      let floor = new THREE.Mesh(floorGeometry, floorMaterial);
      floor.position.set(0,-1,0);
      // floor.position.y = -0.5;
      // floor.rotation.x = Math.PI / 2;
      // console.log(Math.PI/2)
      this.scene.add(floor);
    });
  }

  //创建墙体
  createCubeWall() {
    const _walls = [
      { width: 1, height: 200, depth: 300, color: 0XECF1F3, x: -200, y: 100, z: 0, angle: 0 },//left
      { width: 1, height: 200, depth: 300, color: 0XECF1F3, x: 200, y: 100, z: 0, angle: 0 },//right
      { width: 400, height: 200, depth: 1, color: 0XECF1F3, x: 0, y: 100, z: 150, angle: 1 },//front
      { width: 400, height: 200, depth: 1, color: 0XECF1F3, x: 0, y: 100, z: -150, angle: 1 } //back
    ];
    _walls.map((_wall) => {
      const material = new THREE.MeshBasicMaterial({
        color: _wall.color,
        opacity: 0.4,
        transparent: true
      });
      const cubeGeometry = new THREE.BoxGeometry(_wall.width, _wall.height, _wall.depth);
      const cube = new THREE.Mesh(cubeGeometry, material);
      cube.position.x = _wall.x;
      cube.position.y = _wall.y;
      cube.position.z = _wall.z;
      cube.rotation.y += _wall.angle * Math.PI; //-逆时针旋转,+顺时针
      this.scene.add(cube);
    });
  }

  //创建机柜
  _createRack() {
    const width = 30, height = 88, depth = 40, x = 50, y = 50, z = 0;
    //创建11个机柜
    for (let i = 0; i <= 0; i++) {
      let cabGroup = new THREE.Group();
      cabGroup.position.set(x, y, z)
      cabGroup.name = 'cabGroup';
      // 机柜左侧
      let left_Geometry = new THREE.BoxGeometry(2, height, depth);
      const posx_material = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('../img/rack_left.png')
      });
      const left_obj = new THREE.Mesh(left_Geometry, posx_material);
      left_obj.position.x = width / 2 - 1;
      left_obj.position.y = height / 2;
      left_obj.position.z = z;
      // this.scene.add(left_obj);
      // 机柜右侧
      let right_Geometry = new THREE.BoxGeometry(2, height, depth);
      const negx_material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../img/rack_left.png') });
      const right_obj = new THREE.Mesh(right_Geometry, negx_material);
      right_obj.position.x = -width / 2 + 1;
      right_obj.position.y = height / 2;
      right_obj.position.z = z;
      // this.scene.add(right_obj);
      // 机柜上侧
      let up_Geometry = new THREE.BoxGeometry(width, 2, depth);
      const posy_material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../img/rack_up.png') });
      const up_obj = new THREE.Mesh(up_Geometry, posy_material);
      up_obj.position.x = 0;
      up_obj.position.y = height;
      up_obj.position.z = z;
      // this.scene.add(up_obj);
      // 机柜底部 const negy_material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../img/rack_up.png') });
      // 机柜背面
      let back_Geometry = new THREE.BoxGeometry(width, height, 0);
      const negz_material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../img/rack_back.png') });
      const back_obj = new THREE.Mesh(back_Geometry, negz_material);
      back_obj.position.x = 0;
      back_obj.position.y = height / 2;
      back_obj.position.z = z - depth / 2;
      // this.scene.add(back_obj);
      cabGroup.add(left_obj, right_obj, up_obj, back_obj);

      let menGroup = new THREE.Group();
      menGroup.position.set(x + 15, y, z + 20);
      menGroup.name = 'menGroup';
      // 机柜门
      let front_Geometry = new THREE.BoxGeometry(width, height, 0);
      const posz_material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('../img/rack_front.png') });
      const front_obj = new THREE.Mesh(front_Geometry, posz_material);
      front_obj.name = 'men';
      // front_obj.position.x = x + width/2 * (i+1);
      front_obj.position.x = 0;
      front_obj.position.y = height / 2;
      front_obj.position.z = z + depth / 2;
      // this.scene.add(front_obj);
      menGroup.add(front_obj);
      this.scene.add(cabGroup, menGroup);
    }
  }

  //创建机柜
  _createRack2() {
    const dk = 30, dc = 40, number = '1A001', x = 50, y = 0, z = 0;
    //设置机箱的外壳

    var texture1 = new THREE.TextureLoader().load('../img/rack_left.png');//机箱外表贴图
    var texture3 = new THREE.TextureLoader().load('../img/rack_left.png');//cabz
    var texture2 = new THREE.TextureLoader().load('../img/rack_left.png');//caby


    var cabGroup = new THREE.Group();
    //cabGroup的平面中心是机柜主体的平面中心
    cabGroup.position.set(x, y, z);
    cabGroup.name = 'cabGroup';


    var cabMatLambert = new THREE.MeshLambertMaterial({//设置朗伯材质和贴图
      color: 0x8E8E8E,
      map: texture1
    });
    var cabMatBasic = new THREE.MeshBasicMaterial({//设置基础材质和贴图
      color: 0x8E8E8E,
      map: texture1
    });

    var cabdGeo = new THREE.BoxGeometry(dk, 2, dc);//箱主体底宽30，高2，长40
    var cabd = new THREE.Mesh(cabdGeo, cabMatBasic);
    cabd.position.set(0, 1, 0);

    var cabzGeo = new THREE.BoxGeometry(2, 88, dc);//箱左侧，厚2，高88，长40
    var cabzMaterials = [];
    cabzMaterials.push(//push顺序：X轴正、反，Y轴正、反，Z轴正、反
      cabMatLambert,
      cabMatLambert,
      cabMatLambert,
      cabMatLambert,
      new THREE.MeshBasicMaterial({
        color: 0xBEBEBE,
        map: texture2
      }),
      cabMatBasic
    );
    var cabzMat = new THREE.MeshFaceMaterial(cabzMaterials);
    var cabz = new THREE.Mesh(cabzGeo, cabzMat);
    cabz.position.set(dk / 2 - 1, 46, 0);

    var cabyGeo = new THREE.BoxGeometry(2, 88, dc);//箱左侧，厚2，高88，长40
    var cabyMaterials = [];
    cabyMaterials.push(
      cabMatLambert,
      cabMatBasic,
      cabMatLambert,
      cabMatLambert,
      new THREE.MeshBasicMaterial({
        color: 0xBEBEBE,
        map: texture3
      }),
      cabMatBasic
    );
    var cabyMat = new THREE.MeshFaceMaterial(cabyMaterials);
    var caby = new THREE.Mesh(cabyGeo, cabyMat);
    caby.position.set(-dk / 2 + 1, 46, 0);

    var cabhGeo = new THREE.BoxGeometry(dk - 4, 88, 2);//后板宽26，高88，厚2
    var cabh = new THREE.Mesh(cabhGeo, cabMatBasic);
    cabh.position.set(0, 46, 0 - dc / 2 + 1);

    var cabsGeo = new THREE.BoxGeometry(dk, 2, dc);
    var cabsMaterials = [];
    cabsMaterials.push(
      cabMatBasic,
      cabMatBasic,
      new THREE.MeshLambertMaterial({
        color: 0x8E8E8E,
        map: new THREE.TextureLoader().load('../img/rack_up.png')//canvas贴图
      }),
      cabMatLambert,
      cabMatLambert,
      cabMatLambert
    );
    var cabsMat = new THREE.MeshFaceMaterial(cabsMaterials);
    var cabs = new THREE.Mesh(cabsGeo, cabsMat);
    cabs.position.set(0, 91, 0);
    cabs.name = 'cabs';

    cabGroup.add(cabd, cabz, caby, cabh, cabs);//cabGroup不包括机箱门

    //设置机箱门
    var menGroup = new THREE.Group();
    menGroup.position.set(x + 15, y, z + 20);
    menGroup.name = number;//机箱门的名字为输入的编号

    var menGeo = new THREE.BoxGeometry(dk, 92, 1);//机箱们宽，高，厚
    var mMaterials = [];
    mMaterials.push(
      new THREE.MeshLambertMaterial({ color: 0x999999 }),
      new THREE.MeshLambertMaterial({ color: 0x999999 }),
      new THREE.MeshLambertMaterial({ color: 0x999999 }),
      new THREE.MeshLambertMaterial({ color: 0x999999 }),
      new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load('../img/rack_front.png'),
        overdraw: true
      }),
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('../img/rack_back.png'),
        overdraw: true
      })
    );

    var menMat = new THREE.MeshFaceMaterial(mMaterials);
    var men = new THREE.Mesh(menGeo, menMat);
    men.name = 'men';
    men.position.set(-dk / 2, 46, .5);
    menGroup.add(men);

    this.scene.add(cabGroup, menGroup);
  }

  //开门
  _openDoor(ev) {
    ev.preventDefault();
    // 先汲取屏幕上点击的位置创建一个向量
    let vector3 = new THREE.Vector3(
      (ev.clientX / window.innerWidth) * 2 - 1,
      -(ev.clientY / window.innerHeight) * 2 + 1,
      0.5
    );
    // 然后用unproject函数将点击位置发射光线
    vector3 = vector3.unproject(this.camera);
    // 用THREE.Raycaster 对象向点击位置发射光线
    const raycaster = new THREE.Raycaster(this.camera.position, vector3.sub(this.camera.position).normalize());
    /* 计算射线相机到的对象，可能有多个对象，因此返回是一个数组，按离相机远近排列
       将射线投影到屏幕，如果scene.children里的某个或多个形状相交，则返回这些形状
       第二个参数是设置是否递归，默认是false，当scene里面田间了Group对象的实例时，就需要设置true
       第一个参数不传scene.children也可以，传一个group.children或一个形状数组都可以*/
    const intersects = raycaster.intersectObjects(this.scene.children, true);
    const currObj = intersects[0].object; //currObj为点击到的第一个对象
    if (currObj.name === 'men') {
      const p1 = new THREE.Vector3(currObj.parent.position);
      const number = currObj.parent.name;
      // 如果门是关的，打开
      if (currObj.parent.rotation.y === 0) {
        new TWEEN.Tween(currObj.parent.rotation).to({
          y: .6 * Math.PI
        }, 1500).easing(TWEEN.Easing.Elastic.Out).start();
        // this.controls.target = new THREE.Vector3(
        //   currObj.position.x,
        //   currObj.position.y + 50,
        //   currObj.position.z
        // );
        // this.camera.position.set(
        //   currObj.parent.position.x + 50,
        //   currObj.parent.position.y + 150,
        //   currObj.parent.position.z + 300
        // )
      }
    }
    if (currObj.name === 'server2') {
      var p1 = new THREE.Vector3(currObj.parent.position);//
      console.log(currObj.parent.position)
      if (currObj.parent.position.z === 20) {
        new TWEEN.Tween(currObj.parent.position).to({
          z: currObj.parent.position.z - 20
        }, 500).easing(TWEEN.Easing.Elastic.Out).start();
        //                console.log(currObj.parent.position);

      } else {
        new TWEEN.Tween(currObj.parent.position).to({
          z: currObj.parent.position.z + 20
        }, 500).easing(TWEEN.Easing.Elastic.Out).start();
      }

      this.controls.update();

    }
  }

  // 创建服务器
  _createServer() {
    const h = 50, x = 50, y = 0, z = 0;

    var serv2Group = new THREE.Group();
    serv2Group.position.set(x, y, z);

    //两层的服务器
    var servTexture = new THREE.TextureLoader().load('img/rack_inside.jpg');
    var serv2Geo = new THREE.BoxGeometry(24, 3.5, 36);//这里服务器的尺寸要跟机箱尺寸对应好
    var servMat = new THREE.MeshBasicMaterial({
      color: 0x9AC0CD,
      map: servTexture
    });
    var server2 = new THREE.Mesh(serv2Geo, servMat);//服务器主体
    server2.position.set(0, h, 2);

    var server2mGeo = new THREE.BoxGeometry(26.4, 4, 0.2);//服务器面板尺寸
    var smb2Materials = [];
    smb2Materials.push(
      new THREE.MeshBasicMaterial({ color: 0xffffff }),
      new THREE.MeshBasicMaterial({ color: 0xffffff }),
      new THREE.MeshBasicMaterial({ color: 0xffffff }),
      new THREE.MeshBasicMaterial({ color: 0xffffff }),
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(
          'img/server2.jpg'),
        overdraw: true
      }),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    var server2mMat = new THREE.MeshFaceMaterial(smb2Materials);//服务器面板材质
    var server2face = new THREE.Mesh(server2mGeo, server2mMat);
    server2face.name = 'server2';
    server2face.position.set(0, h, 36 / 2 + 0.2 / 2 + 2);
    serv2Group.add(server2, server2face);
    this.scene.add(serv2Group);
  }
}