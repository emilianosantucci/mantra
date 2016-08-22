import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationSidebarComponent } from './navigation-sidebar.component';
import { NavigationSidebarActions } from './navigation-sidebar.actions';
import { ActionReducer } from '@ngrx/store';
import { NavigationSidebarReducer } from './navigation-sidebar.reducer';
import { NavigationSidebarEffects } from './navigation-sidebar.effects';
import { MenuItemComponent } from './menu-item/menu-item.component';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [CommonModule],
    declarations: [
        NavigationSidebarComponent,
        MenuItemComponent
    ],
    providers: [NavigationSidebarActions],
    exports: [NavigationSidebarComponent]
})
export default class NavigationSidebarModule {
    static reducers(): {[key: string]: ActionReducer<any>} {
        return { navigation: NavigationSidebarReducer };
    }

    static effects(): any[] {
        return [NavigationSidebarEffects];
    }
}
