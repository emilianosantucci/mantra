import { Store } from '@ngrx/store';
import { AppState } from '/client/imports/app/app.state';
import { HomeActions } from '/client/imports/+home/home.actions';
import { Observable } from 'rxjs';
import { HomeState } from '/client/imports/+home/home.state';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
    home$: Observable<HomeState>;

    constructor(private store: Store<AppState>, private actions: HomeActions) {
        this.home$ = store.select<HomeState>('home');
    }

    sayWelcome() {
        this.store.dispatch(this.actions.sayWelcome());
    }
}
