import { Component, Output } from '@angular/core';
import { SidebarStatus } from './toolbar.state';
import { ToolbarService } from './toolbar.service';

@Component({
    selector: 'mantra-toolbar',
    // FIXME: import template when TypeScript 2.0 is released
    template: require('./toolbar.component.html').default
})
export class ToolbarComponent {
    toolbar$;

    constructor(private service: ToolbarService) {
        this.toolbar$ = service.toolbar$;
    }

    close(): void {
        this.service.closeNavigationSidebar();
    }

    open(): void {
        this.service.openNavigationSidebar();
    }

    toggle(): void {
        this.service.toogleNavigationSidebar();
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
