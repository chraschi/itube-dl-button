import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname)
betterModuleAlias(__dirname)
console.log(__dirname);
import { GetInitArgs } from '$libmodule'
import * as http from 'http';


const args = GetInitArgs();

console.log(args);

import * as http from 'http';

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('blabla');
  }).listen(3000);