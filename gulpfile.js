'use strict';

var gulp = require('gulp');
var feathercoreTasks = require('feathercore-build');

feathercoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
