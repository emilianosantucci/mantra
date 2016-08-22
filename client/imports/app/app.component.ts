import { Component } from '@angular/core';
import { StoreLogMonitorComponent } from '@ngrx/store-log-monitor';
import { PolymerElement } from '@vaadin/angular2-polymer';

@Component({
    selector: 'app',
    // FIXME: import template when TypeScript 2.0 is released
    template: require('./app.component.html').default,
    directives: [
        // ToolbarComponent,
        // NavigationSidebarComponent,
        StoreLogMonitorComponent,
        PolymerElement('app-drawer-layout'),
        PolymerElement('app-drawer'),
        PolymerElement('app-header-layout'),
        PolymerElement('app-toolbar'),
        PolymerElement('app-header')
    ],
})
export class AppComponent {
    constructor() {
    }
}
