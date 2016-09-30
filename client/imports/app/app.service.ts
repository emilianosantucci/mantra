import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { AppState } from '/client/imports/app/app.state';
import { ToolbarState } from '/client/imports/app/toolbar/toolbar.state';
import { NavigationSidebarState } from '/client/imports/app/navigation-sidebar/navigation-sidebar.state';
import { NavigationSidebarService } from '/client/imports/app/navigation-sidebar/navigation-sidebar.service';
import { ToolbarService } from '/client/imports/app/toolbar/toolbar.service';


@Injectable()
export class AppService {
    toolbar$: Observable<ToolbarState>;
    navigation$: Observable<NavigationSidebarState>;

    constructor(private store: Store<AppState>,
                private navigationSidebarService: NavigationSidebarService,
                private toolbarService: ToolbarService) {

        this.toolbar$ = store.select<ToolbarState>('toolbar');
        // this.toolbarService.toolbar$ = this.toolbar$;
        this.navigation$ = store.select<NavigationSidebarState>('navigation');
        // this.navigationSidebarService.navigation$= this.navigation$;
    }
}
