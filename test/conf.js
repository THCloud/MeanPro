/**
 *	./test/conf.js
 *  @file      include path of each folder.
 *
 *  @author    TH_Cloud
 *
 */

var path = require('path');

var PROJECT_PATH = '/Users/thcloud/Documents/gra/Project';

module.exports = {
	app: path.join(PROJECT_PATH, 'app'),
	config: path.join(PROJECT_PATH, 'config'),
	models: path.join(PROJECT_PATH, 'app', 'models'),
	routes: path.join(PROJECT_PATH, 'app', 'routes')
};