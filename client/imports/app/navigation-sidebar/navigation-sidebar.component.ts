import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { NavigationSidebarState } from './navigation-sidebar.state';
import { NavigationSidebarService } from './navigation-sidebar.service';

@Component({
    selector: 'se-navigation',
    // FIXME: import template when TypeScript 2.0 is released
    template: require('./navigation-sidebar.component.html').default
})
export class NavigationSidebarComponent implements OnInit {
    navigation$: Observable<NavigationSidebarState>;

    constructor(private service: NavigationSidebarService) {
        this.navigation$ = service.navigation$;
    }

    ngOnInit(): any {
        console.log('Navigation OnInit');
        this.service.loadNavigation();
    }
}
