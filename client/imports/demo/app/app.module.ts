import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule, combineReducers, ActionReducer } from '@ngrx/store';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { initialState } from './app.state';
import { RouterModule, Route } from '@angular/router';
import { routerReducer } from '@ngrx/router-store';
import { appReducer } from '/client/imports/demo/app/app.reducer';
import ToolbarModule from '/client/imports/demo/app/toolbar/toolbar.module';
import NavigationSidebarModule from '/client/imports/demo/app/navigation-sidebar/navigation-sidebar.module';
import { appRoutes } from './app.routes';
import SharedModule from '../../shared/shared.module';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        BrowserModule,
        SharedModule.forRoot(),
        HttpModule,
        RouterModule.forRoot(appRoutes),
        StoreModule.provideStore(DemoAppModule.reducers(), initialState),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        ToolbarModule.forRoot(),
        NavigationSidebarModule.forRoot()
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class DemoAppModule {
    static reducers(): ActionReducer<any> {
        return combineReducers(Object.assign({},
            appReducer,
            { router: routerReducer },
            NavigationSidebarModule.reducers(),
            ToolbarModule.reducers(),
            (appRoutes as Array<Route>).filter(route => (route.data && route.data['reducers'])).map(route => route.data['reducers']).pop()
        ));
    }
}
