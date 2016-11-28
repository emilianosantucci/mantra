import { NavigationSidebarState } from './navigation-sidebar.state';
import { Action, ActionReducer } from '@ngrx/store';
import { NavigationSidebarMenuState } from './navigation-sidebar-menu.state';
import { NavigationSidebarActions } from './navigation-sidebar.actions';
import { fromJS } from 'immutable';

const initialState: NavigationSidebarState = <NavigationSidebarState> {
    menu: <NavigationSidebarMenuState> {
        items: []
    }
};

export const NavigationSidebarReducer: ActionReducer<NavigationSidebarState> = (state: NavigationSidebarState = initialState, action: Action): NavigationSidebarState => {
    if (!action && !action.type) {
        return state;
    }

    let newState = fromJS(state);

    switch (action.type) {
        case NavigationSidebarActions.LOAD_MENU_SUCCESS:
            newState = newState.setIn('menu.items'.split('.'), action.payload);
            break;
        default:
            return state;
    }

    return Object.assign({}, state, newState.toJS());
};
