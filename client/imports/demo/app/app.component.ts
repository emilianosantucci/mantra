import { Component } from '@angular/core';
import * as template from './app.component.html';

@Component({
    moduleId: module.id,
    selector: 'mantra-app',
    template: template.default
})
export class AppComponent {
    constructor() {
    }
}
