import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { NavigationSidebarActions } from './navigation-sidebar.actions';
import { MenuItems } from '/shared/collections/menu-items.collection';

@Injectable()
export class NavigationSidebarEffects {

    constructor(private updates$: Actions, private actions: NavigationSidebarActions) { }

    @Effect()
    loadResult$ = this.updates$
        .ofType(NavigationSidebarActions.LOAD_MENU)
        .do(() => console.log('Load menu...'))
        .switchMap((action) => MenuItems.find())
        .debounce(() => Observable.interval(10))
        .map(items => this.actions.loadMenuSuccess(items));

}

