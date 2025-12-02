import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideSweetAlert2 } from '@sweetalert2/ngx-sweetalert2';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { routes } from './app.routes';
import {provideTranslateService, provideTranslateLoader} from "@ngx-translate/core";
import {provideTranslateHttpLoader} from "@ngx-translate/http-loader";
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideEnvironmentNgxMask(),
    provideSweetAlert2({
      // Optional configuration, e.g.,
      fireOnInit: false,
      dismissOnDestroy: true,
    }),
    provideHttpClient(),
    provideTranslateService({
       loader: provideTranslateHttpLoader({
        prefix: 'assets/i18n/',
        suffix: '.json'
      }),
      fallbackLang: 'es',
      lang: 'es'
    })


  ]
};
