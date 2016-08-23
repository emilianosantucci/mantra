import { Injectable, NgModuleFactory, NgModuleFactoryLoader, Compiler, Type, DynamicComponentLoader } from '@angular/core';
import { ConcreteType } from '@angular/compiler/src/facade/lang';

class LoaderCallback {
    constructor(public callback) {}
}

// noinspection TypeScriptValidateTypes
export let load: Type = (callback: Function) => {
    return new LoaderCallback(callback);
};

/**
 * Inspired on https://gist.github.com/brandonroberts/02cc07face25886fe142c4dbd8da1340#file-async-ng-module-loader-ts
 *
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
                .then((type: any) => checkNotEmpty(type))
                .then((type: any) => this.compiler.compileModuleAsync(type.default));
        } else {
            // FIXME: file not resolved at runtime

            let name = (modulePath as string).split('#');
            let module: ConcreteType<any> = require(name[0]).default;
            let promise = Promise.resolve(module);

            return promise.then((type) => this.compiler.compileModuleAsync(type));
        }
    }
}

function checkNotEmpty(value: any): any {
    if (!value) {
        throw new Error(`Cannot find module. Error: ${value}`);
    }
    return value;
}
