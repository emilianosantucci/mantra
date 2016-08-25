import { Injectable } from '@angular/core';
import { MeteorComponent } from 'angular2-meteor';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { NavigationSidebarActions } from './navigation-sidebar.actions';
import { MenuItem } from '/shared/models/menu-item.model';
import { MenuItems } from '/shared/collections/menu-items.collection';

@Injectable()
export class NavigationSidebarEffects extends MeteorComponent {

    constructor(private _updates$: Actions, private _actions: NavigationSidebarActions) {
        super();
    }

    // FIXME: load on init

    // @Effect()
    // load$ = this._updates$
    //     .ofType(NavigationSidebarActions.LOAD_MENU).distinctUntilChanged();

    @Effect()
    loadResult$ = this._updates$
        .ofType(NavigationSidebarActions.LOAD_MENU)
        .switchMapTo(this._loadNavigation())
        .map((items: MenuItem[]) => this._actions.loadMenuSuccess(items));

    private _loadNavigation(): Observable<MenuItem[]> {
        let result: Observable<MenuItem[]>;

        result = Observable.create(obs => {
            this.autorun(() => {
                let items = MenuItems.find({}).fetch();
                obs.next(items);
            }, false);
        });

        return result;
    }
}

