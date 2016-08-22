export interface ToolbarState {
    title: string;
    menu: SidebarStatus;
}

export enum SidebarStatus {
    OPEN = <any> 'open',
    CLOSE = <any> 'close'
}
