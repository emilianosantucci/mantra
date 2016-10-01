import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { MenuItem } from '/shared/models/menu-item.model';
import ActionsUtils from '/client/imports/shared/utils/actions.utils';

@Injectable()
export class NavigationSidebarActions {
    static LABEL = 'Navigation';

    static LOAD_MENU: string = ActionsUtils.createMessage(NavigationSidebarActions.LABEL, 'Load menu');

    loadMenu(): Action {
        return {
            type: NavigationSidebarActions.LOAD_MENU
        };
    }

    static LOAD_MENU_SUCCESS: string = ActionsUtils.createMessage(NavigationSidebarActions.LABEL, 'Load menu success');

    loadMenuSuccess(items: MenuItem[]): Action {
        return {
            type: NavigationSidebarActions.LOAD_MENU_SUCCESS,
            payload: items
        };
    }
}
