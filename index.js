require('time-require');

var babel = require('babel-core');

babel.transformFileSync('./fixture.js', {stage: 3});