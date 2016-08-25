import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { MenuItem } from '/shared/models/menu-item.model';

@Injectable()
export class NavigationSidebarActions {

    static LOAD_MENU: string = '[Navigation] Load menu';

    loadMenu(): Action {
        return {
            type: NavigationSidebarActions.LOAD_MENU
        };
    }

    static LOAD_MENU_SUCCESS: string = '[Navigation] Load menu success';

    loadMenuSuccess(items: MenuItem[]): Action {
        return {
            type: NavigationSidebarActions.LOAD_MENU_SUCCESS,
            payload: items
        };
    }
}
