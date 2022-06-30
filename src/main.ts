import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// @ts-ignore
window.CESIUM_BASE_URL = '/assets/cesium/';
// use pnpm in angular
// ng new test-pnpm --skip-install
// ng config cli.packageManager pnpm
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
