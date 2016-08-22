import { Injectable } from '@angular/core';
import { ToolbarActions } from './toolbar.actions';
import { Actions } from '@ngrx/effects';

@Injectable()
export class ToolbarEffects {
    constructor(private _updates$: Actions, private _actions: ToolbarActions) {
    }
}
