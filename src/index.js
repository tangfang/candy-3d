'use strict';
import Candy3D from './module/candy-3d.module';
import mockData from './mocks/mock-data';

let candy = new Candy3D('app', {
    debug: true,
    antialias: true,
    clearColor: '#39609B',
    showStats: true
});
candy.init(mockData);
