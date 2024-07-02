import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import routeConfigurations from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
              provideZoneChangeDetection({ eventCoalescing: true }), 
              provideProtractorTestingSupport(), 
              provideRouter(routeConfigurations)
            ]
};
