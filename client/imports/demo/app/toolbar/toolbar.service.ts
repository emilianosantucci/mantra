import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { AppState } from '/client/imports/demo/app/app.state';
import { ToolbarState } from './toolbar.state';
import { ToolbarActions } from './toolbar.actions';

@Injectable()
export class ToolbarService {
    toolbar$: Observable<ToolbarState>;

    constructor(private store: Store<AppState>,
                private actions: ToolbarActions) {
        this.toolbar$ = store.select<ToolbarState>('toolbar');
        this.store.dispatch(this.actions.close());
    }

    setTitle(title: string): void {
        this.store.dispatch(this.actions.setTitle(title));
    }

    closeNavigationSidebar(): void {
        this.store.dispatch(this.actions.close());
    }

    openNavigationSidebar(): void {
        this.store.dispatch(this.actions.open());
    }

    toogleNavigationSidebar(): void {
        this.store.dispatch(this.actions.toggle());
    }
}
