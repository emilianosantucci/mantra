import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class ToolbarActions {
    static SET_TITLE: string = '[Toolbar] Set page title';

    setTitle(title: string): Action {
        return {
            type: ToolbarActions.SET_TITLE,
            payload: title
        };
    }

    static TOGGLE: string = '[Toolbar] Toggle Menu';

    toggle(): Action {
        return {
            type: ToolbarActions.TOGGLE
        };
    }

    static OPEN: string = '[Toolbar] Open';

    open(): Action {
        return {
            type: ToolbarActions.OPEN
        };
    }

    static CLOSE: string = '[Toolbar] Close';

    close(): Action {
        return {
            type: ToolbarActions.CLOSE
        };
    }
}
