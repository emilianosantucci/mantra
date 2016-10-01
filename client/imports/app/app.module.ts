import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule, combineReducers, ActionReducer } from '@ngrx/store';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { initialState } from './app.state';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import SharedModule from '/client/imports/shared/shared.module';
import { routerReducer } from '@ngrx/router-store';
import { appReducer } from '/client/imports/app/app.reducer';
import { PolymerElement } from '@vaadin/angular2-polymer';
import ToolbarModule from '/client/imports/app/toolbar/toolbar.module';
import NavigationSidebarModule from '/client/imports/app/navigation-sidebar/navigation-sidebar.module';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        BrowserModule,
        SharedModule.forRoot(),
        HttpModule,
        RouterModule.forRoot(appRoutes),
        StoreModule.provideStore(AppModule.reducers(), initialState),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        ToolbarModule.forRoot(),
        NavigationSidebarModule.forRoot()
    ],
    declarations: [
        AppComponent,
        PolymerElement('app-drawer-layout'),
        PolymerElement('app-drawer'),
        PolymerElement('app-header-layout'),
        PolymerElement('app-toolbar'),
        PolymerElement('app-header')
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    static reducers(): ActionReducer<any> {
        return combineReducers(Object.assign({},
            appReducer,
            { router: routerReducer },
            NavigationSidebarModule.reducers(),
            ToolbarModule.reducers(),
            appRoutes.filter(route => (route.data && route.data['reducers'])).map(route => route.data['reducers']).pop()
        ));
    }
}
