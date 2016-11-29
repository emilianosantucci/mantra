import { Component, Output } from '@angular/core';
import { SidebarStatus } from './toolbar.state';
import { ToolbarService } from './toolbar.service';
import * as template from './toolbar.component.html';

@Component({
    moduleId: module.id,
    selector: 'mantra-toolbar',
    template: template.default
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
