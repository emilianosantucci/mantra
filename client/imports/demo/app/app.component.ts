import { Component } from '@angular/core';

@Component({
    selector: 'mantra-app',
    // FIXME: import template when TypeScript 2.0 is released
    template: require('./app.component.html').default
})
export class AppComponent {
    constructor() {
    }
}
