import { Action, ActionReducer } from '@ngrx/store';
import { fromJS } from 'immutable';
import { HomeState } from '/client/imports/+home/home.state';
import { HomeActions } from '/client/imports/+home/home.actions';

const initialState: HomeState = <HomeState> {
    message: ''
};

export const homeReducer: ActionReducer<HomeState> = (state: HomeState = initialState, action: Action): HomeState => {
    let newState = fromJS(state);

    switch (action.type) {
        case HomeActions.WELCOME:
            newState = newState.set('message', 'Welcome to Mantra');
            break;
        default:
            return state;
    }

    return Object.assign({}, state, newState.toJS());
};
