import { Injectable, NgModuleFactory, NgModuleFactoryLoader, Compiler, Type } from '@angular/core';
import { ConcreteType } from '@angular/compiler/src/facade/lang';

class LoaderCallback {
    constructor(public callback) {}
}

// noinspection TypeScriptValidateTypes
export let load: Type = (callback: Function) => {
    return new LoaderCallback(callback);
};

/**
 * NgModuleFactoryLoader that uses Promise to load NgModule type and then compiles them.
 * @experimental
 */
@Injectable()
export class AsyncNgModuleLoader implements NgModuleFactoryLoader {
    constructor(private compiler: Compiler) {}

    load(modulePath: string|LoaderCallback): Promise<NgModuleFactory<any>> {
        if (modulePath instanceof LoaderCallback) {
            let loader = (modulePath as LoaderCallback).callback();

            return Promise
                .resolve(loader)
                .then((type: any) => checkNotEmpty(type, '', ''))
                .then((type: any) => this.compiler.compileModuleAsync(type));
        } else {
            let name = (modulePath as string).split('#');

            let module: ConcreteType<any> = require('../'.concat(name[0])).default;

            let promise = Promise.resolve(module);

            return promise.then((type) => this.compiler.compileModuleAsync(type));
        }
    }
}

function checkNotEmpty(value: any, modulePath: string, exportName: string): any {
    if (!value) {
        throw new Error(`Cannot find '${exportName}' in '${modulePath}'`);
    }
    return value;
}
