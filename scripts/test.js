#!/usr/bin/env node

var shell = require('shelljs');

shell.exec('gulp build');
shell.exec('mocha-phantomjs ./test/index.html');
