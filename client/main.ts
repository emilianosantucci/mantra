import 'reflect-metadata';
import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DemoAppModule } from '/client/imports/demo/app/app.module';

/** For demo purpose, change `DemoAppModule` with your app */
platformBrowserDynamic().bootstrapModule(DemoAppModule);
