import path from 'path';
import fs from 'fs';
import * as module from 'module';
import {__dirname} from './system.lib.js'

/*fs.readdirSync(__dirname).forEach(function (file) {
   
    if (file === 'index.js') return;

    const myrequire = module.createRequire(path.join(__dirname, file));
    //module.exports[path.basename(file, '.js')] = require(path.join(__dirname, file));
    //module.exports[path.basename(file, '.js')] = myrequire('./'+path.basename(file, '.js'));
    module.exports[path.basename(file, '.js')] = import('./'+path.basename(file, '.js'));
});

// require all modules on the path and with the pattern defined
//const req = require.context('./', true, /.js$/);

//const modules = req.keys().map(req);

// export all modules
//module.exports = modules;
*/
var directory = new URL(".", import.meta.url).pathname; 
var fileItr = fs.readdirSync(directory); 
var i = fileItr.indexOf("index.js");//("index.js"));
fileItr.splice(i, 1);

var namespace = "library";

const modulePromises = [...fileItr] .map((f,ii, [moduleName, modulePath]) => ( moduleName = f = f.substring(0, f.length), modulePath=directory, import(`${modulePath}${moduleName}`) ) ); 


var exportsNew = new Object();

var modules = await Promise.all(modulePromises);

modules.forEach( (el,i) => {
    console.log(el['Module: null prototype']);
});
