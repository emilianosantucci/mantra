import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { AppState } from '/client/imports/app/app.state';
import { NavigationSidebarState } from './navigation-sidebar.state';
import { NavigationSidebarActions } from './navigation-sidebar.actions';

@Injectable()
export class NavigationSidebarService {
    navigation$: Observable<NavigationSidebarState>;

    constructor(private store: Store<AppState>,
                private actions: NavigationSidebarActions) {

        this.navigation$ = store.select<NavigationSidebarState>('navigation');
    }

    loadNavigation(): void {
        this.store.dispatch(this.actions.loadMenu());
    }
}
