import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { LayoutService } from '../layout.service';
import { NavigationSidebarState } from './navigation-sidebar.state';
import { PolymerElement } from '@vaadin/angular2-polymer';

@Component({
    selector: 'mc-navigation',
    // FIXME: import template when TypeScript 2.0 is released
    template: require('./navigation-sidebar.component.html').default,
    directives: [ MenuItemComponent, PolymerElement('paper-menu') ],
    pipes: [ AsyncPipe ]
})
export class NavigationSidebarComponent implements OnInit {
    navigation$: Observable<NavigationSidebarState>;

    constructor(private _service: LayoutService) {
        this.navigation$ = _service.navigation$;
    }

    ngOnInit(): any {
        this._service.loadNavigation();
    }
}
