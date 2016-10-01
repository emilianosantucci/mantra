import 'reflect-metadata';
import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '/client/imports/app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
