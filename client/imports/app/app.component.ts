import { Component } from '@angular/core';

@Component({
    selector: 'se-app',
    // FIXME: import template when TypeScript 2.0 is released
    template: require('./app.component.html').default
})
export class AppComponent {
    constructor() {
    }
}
