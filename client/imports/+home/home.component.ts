import { Component, OnInit } from '@angular/core';
import { HomeService } from '/client/imports/+home/home.service';
import { Observable } from 'rxjs';
import { HomeState } from '/client/imports/+home/home.state';

@Component({
    moduleId: module.id,
    selector: 'mantra-home',
    // FIXME: import template when TypeScript 2.0 is released
    template: require('./home.component.html').default
})
export class HomeComponent implements OnInit {
    home$: Observable<HomeState>;

    constructor(private service: HomeService) {
        this.home$ = this.service.home$;
    }

    ngOnInit() {
        this.service.sayWelcome();
    }
}
