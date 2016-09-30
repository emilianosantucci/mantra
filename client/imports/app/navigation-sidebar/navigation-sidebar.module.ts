import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { NavigationSidebarComponent } from './navigation-sidebar.component';
import { NavigationSidebarActions } from './navigation-sidebar.actions';
import { ActionReducer } from '@ngrx/store';
import { NavigationSidebarReducer } from './navigation-sidebar.reducer';
import { NavigationSidebarEffects } from './navigation-sidebar.effects';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { PolymerElement } from '@vaadin/angular2-polymer';
import SharedModule from '/client/imports/shared/shared.module';
import { NavigationSidebarService } from './navigation-sidebar.service';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        SharedModule,
        NavigationSidebarModule.effects().map(effects => EffectsModule.run(effects))
    ],
    declarations: [
        NavigationSidebarComponent,
        MenuItemComponent,
        PolymerElement('paper-menu'),
        PolymerElement('paper-icon-item'),
        PolymerElement('iron-icon')

    ],
    providers: [NavigationSidebarActions],
    exports: [NavigationSidebarComponent]
})
export default class NavigationSidebarModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NavigationSidebarModule,
            providers: [NavigationSidebarService]
        };
    }

    static reducers(): {[key: string]: ActionReducer<any>} {
        return { navigation: NavigationSidebarReducer };
    }

    static effects(): any[] {
        return [NavigationSidebarEffects];
    }
}
