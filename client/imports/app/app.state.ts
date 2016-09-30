import { ToolbarState, SidebarStatus } from './toolbar/toolbar.state';
import { NavigationSidebarState } from './navigation-sidebar/navigation-sidebar.state';
import { HomeState } from '/client/imports/+home/home.state';
import { RouterState } from '@ngrx/router-store';

export interface AppState {
    router: RouterState;
    home: HomeState;
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
