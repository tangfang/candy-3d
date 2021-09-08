const floorJson = {
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
}