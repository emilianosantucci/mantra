import { Routes } from '@angular/router';
import HomeModule from '/client/imports/+home/home.module';


export const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: (() => new Promise((resolve, reject) => {
            return resolve(require('/client/imports/+home/home.module').default)
        })),
        data: {
            reducers: HomeModule.reducers(),
            effects: HomeModule.effects()
        }
    }
];
