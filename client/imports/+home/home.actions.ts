import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import ActionsUtils from '/client/imports/shared/utils/actions.utils';

@Injectable()
export class HomeActions {
    static LABEL = 'Home';

    static WELCOME: string = ActionsUtils.createMessage(HomeActions.LABEL, 'Welcome');

    sayWelcome(): Action {
        return {
            type: HomeActions.WELCOME
        };
    }
}
