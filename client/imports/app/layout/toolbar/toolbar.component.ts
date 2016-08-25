import { Component, Output } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { PolymerElement } from '@vaadin/angular2-polymer';
import { SidebarStatus } from './toolbar.state';
import { LayoutService } from '../layout.service';

@Component({
    selector: 'mc-toolbar',
    // FIXME: import template when TypeScript 2.0 is released
    template: require('./toolbar.component.html').default,
    directives: [
        PolymerElement('paper-header-panel'),
        PolymerElement('paper-icon-button'),
        PolymerElement('app-toolbar'),
        PolymerElement('app-drawer-layout'),
        PolymerElement('app-drawer')
    ],
    pipes: [ AsyncPipe ]
})
export class ToolbarComponent {
    toolbar$;

    constructor(private _service: LayoutService) {
        this.toolbar$ = _service.toolbar$;
    }

    close(): void {
        this._service.closeNavigationSidebar();
    }

    open(): void {
        this._service.openNavigationSidebar();
    }

    toggle(): void {
        this._service.toogleNavigationSidebar();
    }

    set opened(value: boolean) {
        value ? this.open() : this.close();
    }

    @Output()
    get opened(): boolean {
        let open = false;

        this.toolbar$.subscribe(toolbar => {
            open = (toolbar.menu === SidebarStatus.OPEN);
        });

        return open;
    }
}
