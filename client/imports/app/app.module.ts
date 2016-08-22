import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NgModuleFactoryLoader } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreLogMonitorComponent, useLogMonitor } from '@ngrx/store-log-monitor';
import { instrumentStore } from '@ngrx/store-devtools';
import { StoreModule, combineReducers } from '@ngrx/store';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
// import LayoutModule from '../layout/layout.module';
// import ActivityModule from '../activity/activity.module';
// import { initialState } from './app.state';
import { RouterModule } from '@angular/router';
// import { APP_ROUTES } from './app.routes';
// import { AsyncNgModuleLoader } from '../shared/utils/async-ngmodule-loader';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        BrowserModule,
        HttpModule,
        // RouterModule.forRoot(APP_ROUTES),
        // StoreModule.provideStore(combineReducers(Object.assign({}, LayoutModule.reducers(), ActivityModule.reducers())), initialState),
        // LayoutModule
    ],
    declarations: [
        AppComponent,
        StoreLogMonitorComponent
    ],
    providers: [
        // { provide: NgModuleFactoryLoader, useClass: AsyncNgModuleLoader },
        instrumentStore({
            monitor: useLogMonitor({
                visible: true,
                position: 'right'
            })
        })
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
