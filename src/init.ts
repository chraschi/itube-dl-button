import './lib/index.js'
import './lib/globals.js'
import { initSystemModule } from './lib/system.lib.js'
import fs from 'fs'
import process from 'process'

//Build Initialization Parameter Object and startUp System Api
initSystemModule({
    fileUrl: import.meta.url,
    processRef: process,
    FileSystemRef: fs
});


//import betterModuleAlias from 'better-module-alias'
//betterModuleAlias(__dirname)