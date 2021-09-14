const dataMock = {
    floor: {
        width: 400,
        height: 0,
        depth: 300
    },
    rack: {
        id: 'A1001',
        /**
         * geometryParams — 机柜geo属性
         * width — X轴上面的宽度，默认值为1。
         * height — Y轴上面的高度，默认值为1。
         * depth — Z轴上面的深度，默认值为1。
         * thick — 每块板的厚度，默认值为1。
         * widthSegments — （可选）宽度的分段数，默认值是1。
         * heightSegments — （可选）宽度的分段数，默认值是1。
         * depthSegments — （可选）宽度的分段数，默认值是1。
         */
        geometryParams: {
            width: 30,
            height: 88,
            depth: 40,
            thick: 2
        },
        /**
         * position — 机柜在机房中的位置
         */
        position: {
            x: 50,
            y: 10,
            z: 40
        },
        children: [{
            name: 'server1',
            type: 'server',
            U: 50,
        }, {
            name: 'server2',
            type: 'server',
            U: 80,
        }]
    }
}
export default dataMock;