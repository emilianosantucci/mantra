import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { NavigationSidebarState } from './navigation-sidebar.state';
import { NavigationSidebarService } from './navigation-sidebar.service';
import * as template from './navigation-sidebar.component.html';

@Component({
    moduleId: module.id,
    selector: 'mantra-navigation',
    template: template.default
})
export class NavigationSidebarComponent implements OnInit {
    navigation$: Observable<NavigationSidebarState>;

    constructor(private service: NavigationSidebarService) {
        this.navigation$ = service.navigation$;
    }

    ngOnInit(): any {
        this.service.loadNavigation();
    }
}
