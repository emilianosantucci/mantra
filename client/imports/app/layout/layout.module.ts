import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutService } from './layout.service';
import NavigationSidebarModule from './navigation-sidebar/navigation-sidebar.module';
import ToolbarModule from './toolbar/toolbar.module';
import { ActionReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    imports: [
        CommonModule,
        NavigationSidebarModule,
        ToolbarModule,
        LayoutModule.effects().map(effects => EffectsModule.run(effects))
    ],
    declarations: [],
    providers: [],
    exports: [
        NavigationSidebarModule,
        ToolbarModule
    ]
})
export default class LayoutModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: LayoutModule,
            providers: [ LayoutService ]
        };
    }

    static reducers(): {[key: string]: ActionReducer<any>} {
        return Object.assign({}, ToolbarModule.reducers(), NavigationSidebarModule.reducers());
    }

    static effects(): any[] {
        return [...NavigationSidebarModule.effects(), ...ToolbarModule.effects()];
    }
}
