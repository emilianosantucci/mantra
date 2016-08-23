import { Component, OnInit } from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';
import { LayoutService } from '../app/layout/layout.service';

@Component({
    selector: 'mc-home',
    // FIXME: import template when TypeScript 2.0 is released
    template: require('./home.component.html').default,
    directives: [PolymerElement('paper-card')]
})
export class HomeComponent implements OnInit {
    constructor(private _layout: LayoutService) {}

    ngOnInit() {
        // FIXME: use routing to set title
        this._layout.setTitle('Home');
    }
}
