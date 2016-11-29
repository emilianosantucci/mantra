import { Component, OnInit } from '@angular/core';
import { HomeService } from '/client/imports/demo/+home/home.service';
import { Observable } from 'rxjs';
import { HomeState } from '/client/imports/demo/+home/home.state';
import * as template from './home.component.html';

@Component({
    moduleId: module.id,
    selector: 'mantra-home',
    template: template.default
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
