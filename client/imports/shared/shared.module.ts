import { NgModule, ModuleWithProviders } from '@angular/core';
import { ActionReducer } from '@ngrx/store';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [],
    providers: [],
    exports: [CommonModule]
})
export default class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: []
        };
    }

    static forChild(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: []
        };
    }

    static reducers(): {[key: string]: ActionReducer<any>} {
        return {};
    }

    static effects(): any[] {
        return [];
    }
}
