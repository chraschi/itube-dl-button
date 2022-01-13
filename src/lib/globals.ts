import {RuntimeSystemObject} from './@types/DataStore'
import module from 'module';
import * as  ProtectedGlobalModule from 'module';

global.runtimeSystemObj = new RuntimeSystemObject();
global.runtimeModuleManager = {
    LoadedModules: [instanceKey=>dynamic, moduleInstance=>module]
}

// Guard against poorly mocked module constructors
export const Module = (
	module.constructor.length > 1
	? module.constructor
	: ProtectedGlobalModule
)

