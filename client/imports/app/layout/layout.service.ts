import { OnInit, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { ToolbarState } from './toolbar/toolbar.state';
import { NavigationSidebarState } from './navigation-sidebar/navigation-sidebar.state';
import { NavigationSidebarActions } from './navigation-sidebar/navigation-sidebar.actions';
import { ToolbarActions } from './toolbar/toolbar.actions';
import { AppState } from '/client/imports/app/app.state';

@Injectable()
export class LayoutService implements OnInit {
    toolbar$: Observable<ToolbarState>;
    navigation$: Observable<NavigationSidebarState>;

    constructor(private _store: Store<AppState>,
                private _navigationActions: NavigationSidebarActions,
                private _toolbarActions: ToolbarActions) {

        this.toolbar$ = _store.select<ToolbarState>('toolbar');
        this.navigation$ = _store.select<NavigationSidebarState>('navigation');
    }

    ngOnInit(): void {
        this._store.dispatch(this._toolbarActions.close());
    }

    setTitle(title: string): void {
        this._store.dispatch(this._toolbarActions.setTitle(title));
    }

    loadNavigation(): void {
        this._store.dispatch(this._navigationActions.loadMenu());
    }

    closeNavigationSidebar(): void {
        this._store.dispatch(this._toolbarActions.close());
    }

    openNavigationSidebar(): void {
        this._store.dispatch(this._toolbarActions.open());
    }

    toogleNavigationSidebar(): void {
        this._store.dispatch(this._toolbarActions.toggle());
    }
}
