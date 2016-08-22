import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './imports/app/app.module';

document.addEventListener('WebComponentsReady', function () {
    platformBrowserDynamic().bootstrapModule(AppModule);
});
