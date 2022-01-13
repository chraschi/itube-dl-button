import { RuntimeSystemObject } from './@types/DataStore'

    export var __dirname = new URL('.', import.meta.url).pathname;
    export var __filename = new URL('', import.meta.url).pathname;

    export function NewObjFrom(...refObjs){
        let clonedObj = new Object();
        Object.assign(clonedObj, refObjs)
        return clonedObj;
    }

    export async function dynamicInstantiate (url) {
        return {
            exports: ['customExportName'],
            execute: (exports) => {
                // Get and set functions provided for pre-allocated export names
                exports.customExportName.set('value');
            }
        }
    }

    const GetInitArgs = (process) => {
        let args = {};
        process.argv
            .slice(2, process.argv.length)
            .forEach( arg => {
            // long arg
            if (arg.slice(0,2) === '--') {
                const longArg = arg.split('=');
                const longArgFlag = longArg[0].slice(2,longArg[0].length);
                const longArgValue = longArg.length > 1 ? longArg[1] : true;
                args[longArgFlag] = longArgValue;
            }
            // flags
            else if (arg[0] === '-') {
                const flags = arg.slice(1,arg.length).split('');
                flags.forEach(flag => {
                args[flag] = true;
                });
            }
        });
        return args;
    }

    /*sync function registerModule (specifier) {
        System.register([...deps...], function (_export, _context) {
            return {
                setters: [...setters...],
                execute: function () {
            
                }
            };
        });
    }*/

    export function initSystemModule(io, ...args) {     
        let d = { 
            initArgs : GetInitArgs(io.processRef),
            initDirURLData : new URL('.', io.fileUrl),
            initFileURLData : new URL('', io.fileUrl),
            initProcess: io.processRef,
            fileSystemHandle: io.FileSystemRef
        }
        initializeGlobalObject(d);
    }


    function initializeGlobalObject(d, ...args) {     
        let rt = new RuntimeSystemObject();
        rt = global.runtimeSystemObj
        rt.RuntimeReferences.ActiveProcesses.push(d.initProcess);
        rt.RuntimeReferences.FileSystemHandle = d.fileSystemHandle
        rt.SetData('__filename_init', d.initFileURLData);
        rt.SetData('__dirname_init', d.initDirURLData);
    }

    