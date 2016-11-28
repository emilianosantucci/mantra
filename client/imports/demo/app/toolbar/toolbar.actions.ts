import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import ActionsUtils from '/client/imports/shared/utils/actions.utils';

@Injectable()
export class ToolbarActions {
    static LABEL = 'Toolbar';

    static SET_TITLE: string = ActionsUtils.createMessage(ToolbarActions.LABEL, 'Set page title');

    setTitle(title: string): Action {
        return {
            type: ToolbarActions.SET_TITLE,
            payload: title
        };
    }

    static TOGGLE: string = ActionsUtils.createMessage(ToolbarActions.LABEL, 'Toggle Menu');

    toggle(): Action {
        return {
            type: ToolbarActions.TOGGLE
        };
    }

    static OPEN: string = ActionsUtils.createMessage(ToolbarActions.LABEL, 'Open');

    open(): Action {
        return {
            type: ToolbarActions.OPEN
        };
    }

    static CLOSE: string = ActionsUtils.createMessage(ToolbarActions.LABEL, 'Close');

    close(): Action {
        return {
            type: ToolbarActions.CLOSE
        };
    }
}
