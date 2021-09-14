'use strict';
import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';

export default class Candy3D {
  constructor(_dom, _options) {
    this.dom = typeof _dom === 'string' ? document.getElementById(_dom) : _dom;
    this.options = null;
    this.scene = null;  //场景
    this.camera = null; //相机
    this.renderer = null; //渲染器
    this.stats = null;
    this.data = null;
    this._initOptions(_options);
  }
  init(data) {
    this.data = data;
    if (this.options.showStats) {
      this.showStats();
    }

    this._initScene();//创建场景 
    this._initCamera(); //初始化摄像机 
    this._initLight();//灯光布置
    this._initRenderer(); //初始化渲染器 
    this.initMouseCtrl();//创建鼠标控制器 

    this.createFloor(data.floor);//创建地板
    // candy.createWall();  //创建墙体
    data.rack.map((rack) => {
      this.createRack(rack);  //创建机柜
      this.createChildren(rack); //创建服务器
    });

    this.animation();//循环渲染界面
  }
  /* 初始化配置选项
   antialias 抗锯齿
   clearColor 背景色
   */
  _initOptions(options) {
    this.options = options ? options : {};
    this.options.antialias = this.options && this.options.antialias ? this.options.antialias : true;
    this.options.showStats = this.options && this.options.showStats ? this.options.showStats : false;
  }

  /*初始化渲染器
    antialias: 抗锯齿
  */
  _initRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: this.options.antialias });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(this.options.clearColor);//背景色
    this.dom.appendChild(this.renderer.domElement);

    //事件 
    this.renderer.domElement.addEventListener('dblclick', (ev) => {
      this._dblclick(ev);
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
    if (this.options.debug) {
      this._debug();
    }
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
    if (this.stats) {
      this.stats.update();
    }
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
  createFloor(data) {
    // return this.createCube(obj);
    let loader = new THREE.TextureLoader();
    loader.load('../img/grasslight-big.jpg', (texture) => {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(10, 10);
      let floorGeometry = new THREE.BoxGeometry(data.width, data.height, data.depth);
      floorGeometry.name = 'floor'
      let floorMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide
      });
      let floor = new THREE.Mesh(floorGeometry, floorMaterial);
      floor.name = 'floor';
      this.scene.add(floor);
    });
  }

  //创建墙体
  createWall() {
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
  _createRack1() {
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
  createRack(data) {
    const number = '1A001';

    //设置基础材质和贴图
    const texture_left_right = new THREE.MeshBasicMaterial({
      color: 0x8E8E8E,
      map: new THREE.TextureLoader().load('../img/rack_left.png')
    });
    const texture_up_down = new THREE.MeshBasicMaterial({
      color: 0x8E8E8E,
      map: new THREE.TextureLoader().load('../img/rack_up.png')
    });
    const texture_door = new THREE.MeshBasicMaterial({
      color: 0x8E8E8E,
      map: new THREE.TextureLoader().load('../img/rack_back.png')
    });

    //cabGroup的平面中心是机柜主体的平面中心
    let cabGroup = new THREE.Group();
    cabGroup.position.set(data.position.x, data.position.y, data.position.z);
    cabGroup.name = 'cabGroup';

    // 机柜底
    const down_geo = new THREE.BoxGeometry(data.geometryParams.width, data.geometryParams.thick, data.geometryParams.depth);
    let rack_down = new THREE.Mesh(down_geo, texture_up_down);
    rack_down.position.x = 0;
    rack_down.position.y = data.position.y + data.geometryParams.thick / 2;
    rack_down.position.z = data.position.z;

    // 机柜上板
    const up_geo = new THREE.BoxGeometry(data.geometryParams.width, data.geometryParams.thick, data.geometryParams.depth);
    let rack_up = new THREE.Mesh(up_geo, texture_up_down);
    rack_up.position.x = 0;
    rack_up.position.y = data.position.y + data.geometryParams.height - data.geometryParams.thick / 2;
    rack_up.position.z = data.position.z;

    // 机柜左板
    const left_geo = new THREE.BoxGeometry(data.geometryParams.thick, data.geometryParams.height, data.geometryParams.depth);
    let rack_left = new THREE.Mesh(left_geo, texture_left_right);
    rack_left.position.x = -data.geometryParams.width / 2 + data.geometryParams.thick / 2;
    rack_left.position.y = data.position.y + data.geometryParams.height / 2;
    rack_left.position.z = data.position.z;

    // 机柜右板
    const right_geo = new THREE.BoxGeometry(data.geometryParams.thick, data.geometryParams.height, data.geometryParams.depth);
    let rack_right = new THREE.Mesh(right_geo, texture_left_right);
    rack_right.position.x = data.geometryParams.width / 2 - data.geometryParams.thick / 2;
    rack_right.position.y = data.position.y + data.geometryParams.height / 2;
    rack_right.position.z = data.position.z;

    // 机柜后板
    const back_geo = new THREE.BoxGeometry(data.geometryParams.width, data.geometryParams.height, data.geometryParams.thick);
    let rack_back = new THREE.Mesh(back_geo, texture_left_right);
    rack_back.position.x = 0;
    rack_back.position.y = data.position.y + data.geometryParams.height / 2;
    rack_back.position.z = data.position.z - data.geometryParams.depth / 2 + data.geometryParams.thick / 2;

    cabGroup.add(rack_down, rack_up, rack_left, rack_right, rack_back);//cabGroup不包括机箱门

    //设置机箱门
    let menGroup = new THREE.Group();
    menGroup.position.x = data.position.x + data.geometryParams.width / 2;
    menGroup.position.y = data.position.y;
    menGroup.position.z = data.position.z * 2 + data.geometryParams.depth / 2;
    menGroup.name = number;//机箱门的名字为输入的编号

    const menGeo = new THREE.BoxGeometry(data.geometryParams.width, data.geometryParams.height, data.geometryParams.thick);//机箱们宽，高，厚
    let men = new THREE.Mesh(menGeo, new THREE.MeshLambertMaterial({
      map: new THREE.TextureLoader().load('../img/rack_front.png')
    }));
    men.name = 'men';
    men.userData = { status: 'close' };
    men.position.x = -data.geometryParams.width / 2;
    men.position.y = data.position.y + data.geometryParams.height / 2;
    men.position.z = 0;

    menGroup.add(men);
    this.scene.add(cabGroup, menGroup);
  }

  // 创建机柜children
  createChildren(rack) {
    rack.children.map((child) => {
      let childGroup = new THREE.Group();
      childGroup.position.set(rack.position.x, rack.position.y, rack.position.z);

      //两层的服务器
      const geometryParams = {
        width: rack.geometryParams.width - rack.geometryParams.thick * 2 - 2,
        U: rack.position.y + child.U,//位置还需要根据机柜的U位再设计;
        depth: rack.geometryParams.depth - rack.geometryParams.thick * 2,
        thick: 3.5
      };
      //这里服务器的尺寸要跟机箱尺寸对应好
      const servTexture = new THREE.TextureLoader().load('img/rack_inside.jpg');
      const serv2Geo = new THREE.BoxGeometry(geometryParams.width, geometryParams.thick, geometryParams.depth);
      const servMat = new THREE.MeshBasicMaterial({
        color: 0x9AC0CD,
        map: servTexture
      });
      let server2 = new THREE.Mesh(serv2Geo, servMat);//服务器主体
      server2.position.x = 0;
      server2.position.y = geometryParams.U;
      server2.position.z = rack.position.z + rack.geometryParams.thick;

      //服务器面板尺寸
      const server2mGeo = new THREE.BoxGeometry(geometryParams.width + 2.5, geometryParams.thick + 0.5, 0.2);
      let server2face = new THREE.Mesh(server2mGeo, new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('img/server2.jpg')
      }));
      server2face.userData = child;
      server2face.position.x = 0;
      server2face.position.y = geometryParams.U;
      server2face.position.z = rack.position.z + rack.geometryParams.depth / 2 + 0.2;
      childGroup.add(server2, server2face);
      this.scene.add(childGroup);
    });
  }

  //dblclick事件
  _dblclick(ev) {
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
    console.log(currObj);
    if (currObj.name === 'men') {
      const p1 = new THREE.Vector3(currObj.parent.position);
      const number = currObj.parent.name;
      // 如果门是关的，打开
      // if (currObj.parent.rotation.y === 0) {
      if (currObj.userData.status === 'close') {
        new TWEEN.Tween(currObj.parent.rotation).to({
          y: .6 * Math.PI
        }, 1500).easing(TWEEN.Easing.Elastic.Out).start();
        currObj.userData.status = 'open';
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
      } else {
        new TWEEN.Tween(currObj.parent.rotation).to({
          y: 0
        }, 500).start();
        currObj.userData.status = 'close';
      }
    }
    if (currObj.userData.type === 'server') {
      const p1 = new THREE.Vector3(currObj.parent.position);//
      // if (currObj.parent.position.z === 20) {
      if (currObj.userData.status === 'out') {
        new TWEEN.Tween(currObj.parent.position).to({
          z: currObj.parent.position.z - 20
        }, 500).easing(TWEEN.Easing.Elastic.Out).start();
        //                console.log(currObj.parent.position);
        currObj.userData.status = 'in';
      } else {
        new TWEEN.Tween(currObj.parent.position).to({
          z: currObj.parent.position.z + 20
        }, 500).easing(TWEEN.Easing.Elastic.Out).start();
        currObj.userData.status = 'out';
      }

      this.controls.update();
    }
  }

  /**
   * 显示/隐藏性能监视器Stats
   */
  showStats() {
    this.stats = new Stats();
    this.stats.domElement.style.position = 'absolute';
    this.stats.domElement.style.left = '0px';
    this.stats.domElement.style.top = '0px';
    this.dom.appendChild(this.stats.domElement);
  }
  _debug() {
    this.scene.add(new THREE.AxesHelper(89));
  }
}