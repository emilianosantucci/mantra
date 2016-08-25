import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { ToolbarActions } from './toolbar.actions';

@Injectable()
export class ToolbarEffects {
    constructor(private _updates$: Actions, private _actions: ToolbarActions) {
    }
}
