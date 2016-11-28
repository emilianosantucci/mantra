import { Action, ActionReducer } from '@ngrx/store';
import { AppState } from '/client/imports/demo/app/app.state';
import { initialState as routerInitialState } from '@ngrx/router-store';

const initialState: AppState = <AppState> {
    router: routerInitialState
};

export const appReducer: ActionReducer<AppState> = (state: AppState = initialState, action: Action): AppState => {
    switch (action.type) {
        default:
            return state;
    }
};
