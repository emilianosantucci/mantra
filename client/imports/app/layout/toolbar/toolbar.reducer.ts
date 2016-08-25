import { ActionReducer, Action } from '@ngrx/store';
import { fromJS } from 'immutable';
import { ToolbarState, SidebarStatus } from './toolbar.state';
import { ToolbarActions } from './toolbar.actions';

const initialState: ToolbarState = <ToolbarState>{
    title: '',
    menu: SidebarStatus.CLOSE
};

export const ToolbarReducer: ActionReducer<ToolbarState> = (state: ToolbarState = initialState, action: Action): ToolbarState => {
    let newState = fromJS(state);

    switch (action.type) {
        case ToolbarActions.SET_TITLE:
            newState = newState.set('title', action.payload);
            break;

        case ToolbarActions.OPEN:
            newState = newState.set('menu', SidebarStatus.OPEN);
            break;

        case ToolbarActions.CLOSE:
            newState = newState.set('menu', SidebarStatus.CLOSE);
            break;

        case ToolbarActions.TOGGLE:
            newState = newState.set('menu', state.menu === SidebarStatus.OPEN ? SidebarStatus.CLOSE : SidebarStatus.OPEN);
            break;

        default:
            return state;
    }

    return Object.assign({}, state, newState.toJS());
};
