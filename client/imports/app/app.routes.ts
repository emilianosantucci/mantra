import { Routes } from '@angular/router';
import { load } from '/client/imports/shared/utils/async-ngmodule-loader';

export const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: load(() => require('../home/home.module'))
    }
];
