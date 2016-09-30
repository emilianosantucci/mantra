import { NgModule, ModuleWithProviders } from '@angular/core';
import { ActionReducer } from '@ngrx/store';
import SharedModule from '/client/imports/shared/shared.module';
import { HomeComponent } from '/client/imports/+home/home.component';
import { RouterModule } from '@angular/router';
import { homeRoutes } from '/client/imports/+home/home.routes';
import { homeReducer } from '/client/imports/+home/home.reducer';
import { HomeService } from '/client/imports/+home/home.service';
import { HomeActions } from '/client/imports/+home/home.actions';
import { PolymerElement } from '@vaadin/angular2-polymer';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(homeRoutes)
    ],
    declarations: [
        HomeComponent,
        PolymerElement('paper-card')
    ],
    providers: [HomeActions, HomeService],
    exports: [HomeComponent]
})
export default class HomeModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: HomeModule,
            providers: []
        };
    }

    static forChild(): ModuleWithProviders {
        return {
            ngModule: HomeModule,
            providers: []
        };
    }

    static reducers(): {[key: string]: ActionReducer<any>} {
        return {home: homeReducer};
    }

    static effects(): any[] {
        return [];
    }
}

