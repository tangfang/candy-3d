const objectJson = {
    objects: [
        //地板
        {
            show: true,
            uuid: "",
            name: 'floor',
            objType: 'floor',
            length: 2000,
            width: 1600,
            height: 10,
            rotation: [{ direction: 'x', degree: 0 }],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle] 
            x: 0,
            y: 0,
            z: 0,
            style: {
                skinColor: 0x8ac9e2,
                skin: {
                    skin_up: {
                        skinColor: 0x98750f,
                        imgurl:"./img/floor.png",
                        repeatx: true,
                        repeaty: true,
                        width: 128,
                        height: 128
                    },
                    skin_down: {
                        skinColor: 0x8ac9e2,
                    },
                    skin_fore: {
                        skinColor: 0x8ac9e2,
                    }
                }
            }
        },
        //墙体
        {
            show: true,
            uuid: "",
            name: 'wall',
            objType: 'wall',
            thick: 20,
            length: 400,
            height: 340,
            wallData: [
                {//wall1
                    uuid: "",
                    name: 'wall1',
                    thick: 20,
                    height: 240,
                    skin: {
                        skin_up: {
                            skinColor: 0xdddddd,
                        },
                        skin_down: {
                            skinColor: 0xdddddd,
                        },
                        skin_fore: {
                            skinColor: 0xb0cee0,
                        },
                        skin_behind: {
                            skinColor: 0xb0cee0,
                        },
                        skin_left: {
                            skinColor: 0xdeeeee,
                        },
                        skin_right: {
                            skinColor: 0xb0cee0,
                        }
                    },
                    startDot: {
                        x: -900,
                        y: 120,
                        z: -550
                    },
                    endDot: {
                        x: 900,
                        y: 120,
                        z: -550
                    },
                    rotation: [{ direction: 'x', degree: 0 }],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
                    childrens: [
                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'doorhole',
                            objType: 'doorhole',
                            thick: 20,
                            height: 220,
                            startDot: {
                                x: -410,
                                y: 110,
                                z: -350
                            },
                            endDot: {
                                x: -190,
                                y: 110,
                                z: -350
                            },
                            skin: {
                                skin_up: {
                                    skinColor: 0xffdddd,
                                },
                                skin_down: {
                                    skinColor: 0xdddddd,
                                },
                                skin_fore: {
                                    skinColor: 0xffdddd,
                                },
                                skin_behind: {
                                    skinColor: 0xffdddd,
                                },
                                skin_left: {
                                    skinColor: 0xffdddd,
                                },
                                skin_right: {
                                    skinColor: 0xffdddd,
                                }
                            },
                        },
                        {
                            op: '-',
                            show: true,
                            uuid: "",
                            name: 'windowHole',
                            objType: 'windowHole',
                            thick: 20,
                            height: 160,
                            startDot: {
                                x: -50,
                                y: 130,
                                z: -350
                            },
                            endDot: {
                                x: 450,
                                y: 130,
                                z: -350
                            }
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            thick: 30,
                            height: 10,
                            startDot: {
                                x: -50,
                                y: 0,
                                z: -550
                            },
                            endDot: {
                                x: 450,
                                y: 0,
                                z: -550
                            },
                            skin: {
                                skin_up: {
                                    skinColor: 0xc0dee0,
                                },
                                skin_down: {
                                    skinColor: 0xc0dee0,
                                },
                                skin_fore: {
                                    skinColor: 0xc0dee0,
                                },
                                skin_behind: {
                                    skinColor: 0xc0dee0,
                                },
                                skin_left: {
                                    skinColor: 0xd0eef0,
                                },
                                skin_right: {
                                    skinColor: 0xd0eef0,
                                }
                            },
                        },

                        {
                            show: true,
                            uuid: "",
                            name: 'doorCaseRight',
                            objType: 'cube',
                            thick: 24,
                            height: 220,
                            startDot: {
                                x: -410,
                                y: 110,
                                z: -550
                            },
                            endDot: {
                                x: -405,
                                y: 110,
                                z: -550
                            },
                            skin: {
                                skin_up: {
                                    skinColor: 0xc0dee0,
                                },
                                skin_down: {
                                    skinColor: 0xc0dee0,
                                },
                                skin_fore: {
                                    skinColor: 0xc0dee0,
                                },
                                skin_behind: {
                                    skinColor: 0xc0dee0,
                                },
                                skin_left: {
                                    skinColor: 0xd0eef0,
                                },
                                skin_right: {
                                    skinColor: 0xd0eef0,
                                }
                            },
                        },
                        {
                            show: true,
                            name: 'doorCaseLeft',
                            uuid: "",
                            objType: 'cube',
                            thick: 24,
                            height: 220,
                            startDot: {
                                x: -190,
                                y: 110,
                                z: -550
                            },
                            endDot: {
                                x: -195,
                                y: 110,
                                z: -550
                            },
                            skin: {
                                skin_up: {
                                    skinColor: 0xc0dee0,
                                },
                                skin_down: {
                                    skinColor: 0xc0dee0,
                                },
                                skin_fore: {
                                    skinColor: 0xc0dee0,
                                },
                                skin_behind: {
                                    skinColor: 0xc0dee0,
                                },
                                skin_left: {
                                    skinColor: 0xd0eef0,
                                },
                                skin_right: {
                                    skinColor: 0xd0eef0,
                                }
                            },
                        },
                        {
                            show: true,
                            name: 'doorCaseTop',
                            uuid: "",
                            objType: 'cube',
                            thick: 24,
                            height: 5,
                            startDot: {
                                x: -190,
                                y: 220,
                                z: -550
                            },
                            endDot: {
                                x: -410,
                                y: 220,
                                z: -550
                            },
                            skin: {
                                skin_up: {
                                    skinColor: 0xc0dee0,
                                },
                                skin_down: {
                                    skinColor: 0xc0dee0,
                                },
                                skin_fore: {
                                    skinColor: 0xc0dee0,
                                },
                                skin_behind: {
                                    skinColor: 0xc0dee0,
                                },
                                skin_left: {
                                    skinColor: 0xd0eef0,
                                },
                                skin_right: {
                                    skinColor: 0xd0eef0,
                                }
                            },
                        },
                        {
                            show: true,
                            name: 'doorCaseBottom',
                            uuid: "",
                            objType: 'cube',
                            thick: 24,
                            height: 5,
                            startDot: {
                                x: -190,
                                y: 0,
                                z: -560
                            },
                            endDot: {
                                x: -410,
                                y: 0,
                                z: -560
                            },
                            skin: {
                                skin_up: {
                                    skinColor: 0xc0dee0,
                                },
                                skin_down: {
                                    skinColor: 0xc0dee0,
                                },
                                skin_fore: {
                                    skinColor: 0xc0dee0,
                                },
                                skin_behind: {
                                    skinColor: 0xc0dee0,
                                },
                                skin_left: {
                                    skinColor: 0xd0eef0,
                                },
                                skin_right: {
                                    skinColor: 0xd0eef0,
                                }
                            },
                        },
                        {
                            show: true,
                            name: 'doorLeft',
                            uuid: "",
                            objType: 'cube',
                            thick: 4,
                            height: 210,
                            startDot: {
                                x: -196,
                                y: 112,
                                z: -560
                            },
                            endDot: {
                                x: -300,
                                y: 112,
                                z: -560
                            },
                            skin: {
                                opacity: 0.1,
                                skin_up: {
                                    skinColor: 0x51443e,
                                },
                                skin_down: {
                                    skinColor: 0x51443e,
                                },
                                skin_fore: {
                                    skinColor: 0x51443e,
                                },
                                skin_behind: {
                                    skinColor: 0x51443e,
                                },
                                skin_left: {
                                    skinColor: 0x51443e,
                                    imgurl:"./img/door_left.png"
                                },
                                skin_right: {
                                    skinColor: 0x51443e,
                                    imgurl:"./img/door_right.png"
                                }
                            },
                        },
                        {
                            show: true,
                            name: 'doorRight',
                            uuid: "",
                            objType: 'cube',
                            thick: 4,
                            height: 210,
                            startDot: {
                                x: -300,
                                y: 112,
                                z: -560
                            },
                            endDot: {
                                x: -404,
                                y: 112,
                                z: -560
                            },
                            skin: {
                                opacity: 0.1,
                                skin_up: {
                                    skinColor: 0x51443e,
                                },
                                skin_down: {
                                    skinColor: 0x51443e,
                                },
                                skin_fore: {
                                    skinColor: 0x51443e,
                                },
                                skin_behind: {
                                    skinColor: 0x51443e,
                                },
                                skin_left: {
                                    skinColor: 0x51443e,
                                    imgurl:"./img/door_right.png"
                                },
                                skin_right: {
                                    skinColor: 0x51443e,
                                    imgurl:"./img/door_left.png"
                                }
                            },
                        },
                        {
                            show: true,
                            name: 'doorControl',
                            uuid: "",
                            objType: 'cube',
                            thick: 10,
                            height: 40,
                            startDot: {
                                x: -120,
                                y: 160,
                                z: -565
                            },
                            endDot: {
                                x: -160,
                                y: 160,
                                z: -565
                            },
                            skin: {
                                opacity: 0.1,
                                skin_up: {
                                    skinColor: 0x333333,
                                },
                                skin_down: {
                                    skinColor: 0x333333,
                                },
                                skin_fore: {
                                    skinColor: 0x333333,
                                },
                                skin_behind: {
                                    skinColor: 0x333333,
                                },
                                skin_left: {
                                    skinColor: 0x333333,
                                    imgurl:"./img/doorControl.png"
                                },
                                skin_right: {
                                    skinColor: 0x333333,
                                }
                            },
                        },
                    ]
                },
                {//wall2
                    uuid: "",
                    name: 'wall2',
                    thick: 20,
                    height: 240,
                    skin: {
                        skin_up: {
                            skinColor: 0xdddddd,
                        },
                        skin_down: {
                            skinColor: 0xdddddd,
                        },
                        skin_fore: {
                            skinColor: 0xb0cee0,
                        },
                        skin_behind: {
                            skinColor: 0xb0cee0,
                        },
                        skin_left: {
                            skinColor: 0xb0cee0,
                        },
                        skin_right: {
                            skinColor: 0xdeeeee,
                        }
                    },
                    startDot: {
                        x: -900,
                        y: 120,
                        z: 650
                    },
                    endDot: {
                        x: 900,
                        y: 120,
                        z: 650
                    },
                },
                {//wall3
                    uuid: "",
                    name: 'wall3',
                    thick: 20,
                    height: 240,
                    skin: {
                        skin_up: {
                            skinColor: 0xdddddd,
                        },
                        skin_down: {
                            skinColor: 0xdddddd,
                        },
                        skin_fore: {
                            skinColor: 0xb0cee0,
                        },
                        skin_behind: {
                            skinColor: 0xdeeeee,
                        },
                        skin_left: {
                            skinColor: 0xb0cee0,
                        },
                        skin_right: {
                            skinColor: 0xb0cee0,
                        }
                    },
                    startDot: {
                        x: 890,
                        y: 120,
                        z: -555
                    },
                    endDot: {
                        x: 890,
                        y: 120,
                        z: 655
                    },
                },
                {//wall4
                    uuid: "",
                    name: 'wall4',
                    thick: 20,
                    height: 240,
                    skin: {
                        skin_up: {
                            skinColor: 0xdddddd,
                        },
                        skin_down: {
                            skinColor: 0xdddddd,
                        },
                        skin_fore: {
                            skinColor: 0xdeeeee,
                        },
                        skin_behind: {
                            skinColor: 0xb0cee0,
                        },
                        skin_left: {
                            skinColor: 0xb0cee0,
                        },
                        skin_right: {
                            skinColor: 0xb0cee0,
                        }
                    },
                    startDot: {
                        x: -890,
                        y: 120,
                        z: -555
                    },
                    endDot: {
                        x: -890,
                        y: 120,
                        z: 655
                    },
                }
            ],
            style: {
                skinColor: 0x8ac9e2
            }

        },
        //玻璃
        {
            show: true,
            name: 'windowGlass1',
            uuid: "",
            objType: 'glasses',
            width: 500,
            height: 200,
            pic:"./img/glass.jpg",
            transparent: true,
            opacity: 1,
            position: { x: 200, y: 120, z: -565 },
            rotation: { x: 0, y: 0 * Math.PI, z: 0 },
            blending: false,
        },
        //空调
        {
            show: true,
            uuid: "",
            name: 'aircondition',
            objType: 'cube',
            length: 60,
            width: 80,
            height: 200,
            rotation: [{ direction: 'y', degree: 0.3*Math.PI}],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
            x: -780,
            y: 110,
            z: 600,
            style: {
                skinColor: 0xfefefe,
                skin: {
                    skin_fore: {
                        imgurl:"./img/air.png"
                    },
                }
            }
        },
        {
            show: true,
            uuid: "",
            name: 'aircondition',
            objType: 'cube',
            length: 80,
            width: 60,
            height: 200,
            rotation: [{ direction: 'y', degree: 0.3*Math.PI}],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
            x: 780,
            y: 110,
            z: 600,
            style: {
                skinColor: 0xfefefe,
                skin: {
                    skin_left: {
                        imgurl:"./img/air.png"
                    },
                }
            }
        },
        //温室度
        {
            show: true,
            name: 'messagePanel',
            uuid: "",
            objType: 'plane',
            width: 50,
            height: 50,
            pic:"./img/damp.jpg",
            transparent: true,
            opacity: 1,
            position: { x:-300, y: 150, z: 639 },
            rotation: { x: 0, y: Math.PI, z: 0 },
            blending: false,
        },
        //机柜1-1 --原型
        {
            show:true,
            name: 'cabinet1_1',
            shellname:'cabinet1_1_shell',
            uuid: '',
            // rotation: [{ direction: 'y', degree: 0.25*Math.PI}],//旋转     uuid:'',
            objType: 'emptyCabinet',
            transparent:true,
            size:{length:66,width:70,height:200, thick:2},
            position: { x:300, y: 105, z: -180 },
            doors: {
                doorType:'lr',// ud上下门 lr左右门 单门可以缺省
                doorSize: [1],
                doorname: ['cabinet1_1_door_01'],
                skins:[ {
                    skinColor: 0x333333,
                    skin_fore: {
                        imgurl:"./img/rack_door_back.png"
                    },
                    skin_behind: {
                        imgurl:"./img/rack_front_door.png"
                    }
                }]
            },
            skin:{
                skinColor: 0xff0000,
                skin_up: {
                    skin:{
                        skinColor: 0xff0000,
                        skin_up: {
                            imgurl:"./img/rack_door.png"
                        },
                        skin_down: {
                            imgurl:"./img/rack_door.png"
                        },
                        skin_fore: {
                            skinColor: 0xff0000,
                            imgurl:"./img/rack_door_back.png"
                        },
                        skin_behind: {
                            skinColor: 0xff0000,
                            imgurl:"./img/rack_front_door.png"
                        },
                        skin_left: {
                            imgurl:"./img/rack_left_door.png"
                        },
                        skin_right: {
                            imgurl:"./img/rack_left_door.png"
                        },
                    }
                },
                skin_down: {
                    skin: {
                        skinColor: 0x333333,
                    }
                },
                skin_left: {
                    skin: {
                        skinColor: 0x333333,
                    }
                },
                skin_right: {
                    skin: {
                        skinColor: 0x333333,
                    }
                },
                skin_behind: {
                    skin: {
                        skinColor: 0x333333,
                    }
                }
            }
        },
        //主机1
        {
            show: true,
            uuid: "",
            name: 'equipment_card_1',
            objType: 'cube',
            length: 60,
            width: 65,
            height: 10,
            x: -100,
            y: 105,
            z: -180,
            style: {
                skinColor: 0xff0000,
                skin: {
                    skin_up: {
                        skinColor: 0xff0000,
                        imgurl:"./static/my/image/room6.jpg"
                        // imgurl: "./datacenterdemo/res/rack_inside.jpg",
                    },
                    skin_down: {
                        skinColor: 0xff0000,
                        imgurl:"./static/my/image/room6.jpg"
                        // imgurl: "./datacenterdemo/res/rack_inside.jpg",
                    },
                    skin_fore: {
                        skinColor: 0xff0000,
                        imgurl:"./static/my/image/room6.jpg"
                        // imgurl: "./datacenterdemo/res/rack_inside.jpg",
                    },
                    skin_behind: {
                        skinColor: 0xff0000,
                        imgurl:"./static/my/image/room6.jpg"
                        // imgurl: "./datacenterdemo/res/server2.jpg",
                    },
                    skin_left: {
                        skinColor: 0xff0000,
                        imgurl:"./static/my/image/room6.jpg"
                        // imgurl: "./datacenterdemo/res/rack_inside.jpg",
                    },
                    skin_right: {
                        skinColor: 0xff0000,
                        imgurl:"./static/my/image/room6.jpg"
                        // imgurl: "./datacenterdemo/res/rack_inside.jpg",
                    }
                }
            }
        },
        //主机2
        {
            show: true,
            uuid: "",
            name: 'equipment_card_2',
            objType: 'cube',
            length: 60,
            width: 65,
            height: 20,
            x: -100,
            y: 120,
            z: -180,
            style: {
                skinColor: 0x92630b,
                skin: {
                    skin_up: {
                        skinColor: 0x92630b,
                        // imgurl: "./datacenterdemo/res/rack_inside.jpg",
                        imgurl:"./static/my/image/room6.jpg"
                    },
                    skin_down: {
                        skinColor: 0x92630b,
                        imgurl:"./static/my/image/room6.jpg"
                        // imgurl: "./datacenterdemo/res/rack_inside.jpg",
                    },
                    skin_fore: {
                        skinColor: 0x92630b,
                        imgurl:"./static/my/image/room6.jpg"
                        // imgurl: "./datacenterdemo/res/rack_inside.jpg",
                    },
                    skin_behind: {
                        skinColor: 0x92630b,
                        imgurl:"./static/my/image/room6.jpg"
                        // imgurl: "./datacenterdemo/res/server2.jpg",
                    },
                    skin_left: {
                        skinColor: 0x92630b,
                        imgurl:"./static/my/image/room6.jpg"
                        // imgurl: "./datacenterdemo/res/rack_inside.jpg",
                    },
                    skin_right: {
                        skinColor: 0x92630b,
                        imgurl:"./static/my/image/room6.jpg"
                        // imgurl: "./datacenterdemo/res/rack_inside.jpg",
                    }
                }
            }
        },
        //主机3
        {
            show: true,
            uuid: "",
            name: 'equipment_card_3',
            objType: 'cube',
            length: 60,
            width: 65,
            height: 30,
            x: -100,
            y: 145,
            z: -180,
            style: {
                skinColor: 0x92630b,
                skin: {
                    skin_up: {
                        skinColor: 0x92630b,
                        imgurl:"./static/my/image/room6.jpg"
                        // imgurl: "./datacenterdemo/res/rack_inside.jpg",
                    },
                    skin_down: {
                        skinColor: 0x92630b,
                        imgurl:"./static/my/image/room6.jpg"
                       // imgurl: "./datacenterdemo/res/rack_inside.jpg",
                    },
                    skin_fore: {
                        skinColor: 0x92630b,
                        imgurl:"./static/my/image/room6.jpg"
                       // imgurl: "./datacenterdemo/res/rack_inside.jpg",
                    },
                    skin_behind: {
                        skinColor: 0x92630b,
                        imgurl:"./static/my/image/room6.jpg"
                       // imgurl: "./datacenterdemo/res/server3.jpg",
                    },
                    skin_left: {
                        skinColor: 0x92630b,
                        imgurl:"./static/my/image/room6.jpg"
                        //imgurl: "./datacenterdemo/res/rack_inside.jpg",
                    },
                    skin_right: {
                        skinColor: 0x92630b,
                        imgurl:"./static/my/image/room6.jpg"
                        //imgurl: "./datacenterdemo/res/rack_inside.jpg",
                    }
                }
            }
        },
    ],
    events: {
        dbclick: [
            {
                obj_name: "doorRight",
                obj_uuid: "",
                obj_event: function (obj) {
                    openRightDoor(obj, function () { });
                }
            },
            {
                obj_name: "doorLeft",
                obj_uuid: "",
                obj_event: function (obj) {
                    var doorstate = "close";
                    var tempobj = null;
                    if (obj.doorState != null && typeof (obj.doorState) != 'undefined') {
                        doorstate = obj.doorState;
                        tempobj = obj.parent;
                    } else {
                        console.log("add parent");
                        var objparent = obj.parent;
                        tempobj = new THREE.Object3D();
                        tempobj.position.set(obj.position.x + obj.geometry.parameters.width / 2, obj.position.y, obj.position.z);
                        obj.position.set(-obj.geometry.parameters.width / 2, 0, 0);
                        tempobj.add(obj);
                        objparent.add(tempobj);
                    }
                    obj.doorState = (doorstate == "close" ? "open" : "close");
                    new TWEEN.Tween(tempobj.rotation).to({
                        y: (doorstate == "close" ? -0.25 * 2 * Math.PI : 0 * 2 * Math.PI)
                    }, 10000).easing(TWEEN.Easing.Elastic.Out).start();
                }
            },
            {
                obj_name: "cabinetdoor3_1",
                obj_uuid: "",
                obj_event: function (obj) {
                    opcabinetdoor(obj);
                }
            },
            {
                findObject:function(objname){//查找某一类符合名称的对象
                    if (objname.indexOf("cabinet") >= 0 && objname.indexOf("door") >= 0) {
                        return true;
                    } else {
                        return false;
                    }
                },
                obj_uuid: "",
                obj_event: function (obj) {
                    opcabinetdoor(obj);
                }
            },
            {
                findObject: function (objname) {//查找某一类符合名称的对象
                    if (objname.indexOf("equipment") >= 0 && objname.indexOf("card") >= 0) {
                        return true;
                    } else {
                        return false;
                    }
                },
                obj_uuid: "",
                obj_event: function (obj) {
                    var cardstate = "in";
                    if (obj.cardstate != null && typeof (obj.cardstate) != 'undefined') {
                        cardstate = obj.cardstate;
                    } else {
                        obj.cardstate = "out";
                    }
                    new TWEEN.Tween(obj.position).to({
                        x: (cardstate == "in" ? obj.position.x - 50 : obj.position.x + 50),
                    }, 1000).onComplete(function () { obj.cardstate = cardstate == "in" ? "out" : "in"; }).start();
                }
            }
        ],
        mouseDown: {
        },
        mouseUp: {
        },
        mouseMove: {
        }
    },
    btns: [
        {
            btnid: "btn_reset",
            btnTitle: "场景复位",
            // btnimg: "./datacenterdemo/res/reset.png",
            btnimg:"./static/my/image/room6.jpg",
            event: function () {
                $('#canvas-frame').empty();
                msjstation = null; msj3DObj = null;
                msjstation = new msj3D();
                msjstation.initmsj3D('canvas-frame', initOption, Aobjects);
                msjstation.start();
                //var mainCamera = msj3DObj.commonFunc.findObject("mainCamera");//主摄像机
                //new TWEEN.Tween(mainCamera.position).to({
                //    x: 0, y: 1000, z: -1800,
                //}, 1000).start();
                //mainCamera.lookAt({ x: 0, y: 0, z: 0 });
            }
        },
        {
            btnid: "btn_connection",
            btnTitle: "走线管理",
            btnimg:"./static/my/image/room6.jpg",
            // btnimg: "./datacenterdemo/res/connection.png",
            event: function () {
            }
        },
        {
            btnid: "btn_usage",
            btnTitle: "机柜利用率",
            btnimg:"./static/my/image/room6.jpg",
            // btnimg: "./datacenterdemo/res/usage.png",
            event: function () {
            }
        },
        {
            btnid: "btn_edit",
            btnTitle: "拖拽机柜",
            btnimg:"./static/my/image/room6.jpg",
            // btnimg: "./datacenterdemo/res/edit.png",
            event: function () {
            }
        },
        {
            btnid: "btn_alarm",
            btnTitle: "告警巡航",
            btnimg:"./static/my/image/room6.jpg",
            // btnimg: "./datacenterdemo/res/alarm.png",
            event: function () {
                var mainCamera = msj3DObj.commonFunc.findObject("mainCamera");//主摄像机
                var doorRight = msj3DObj.commonFunc.findObject("doorRight");
                mainCamera.lookAt(doorRight.position);
                new TWEEN.Tween(mainCamera.position).to({
                    x:-300, y:200, z:-700,
                }, 5000).onComplete(function () {

                    openRightDoor(msj3DObj.commonFunc.findObject("doorRight"), function () {
                        var cabinet3_1 = msj3DObj.commonFunc.findObject("cabinet3_1");
                        mainCamera.lookAt(cabinet3_1.position);
                        new TWEEN.Tween(mainCamera.position).to({
                            x: -300, y: 150, z: -200,
                        }, 5000).onComplete(function () {

                            mainCamera.lookAt(cabinet3_1.position);
                        }).start();
                    });
                }).start();


            }
        },
    ]
}
export default objectJson;