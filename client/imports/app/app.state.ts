import { ToolbarState, SidebarStatus } from './layout/toolbar/toolbar.state';
import { NavigationSidebarState } from './layout/navigation-sidebar/navigation-sidebar.state';

export interface AppState {
    toolbar: ToolbarState;
    navigation: NavigationSidebarState;
}

export const initialState: AppState = <AppState> {
    toolbar: {
        title: '',
        menu: SidebarStatus.CLOSE
    },
    navigation: {
        menu: {
            items: []
        }
    }
};
