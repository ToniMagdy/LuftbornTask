import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { provideAuth0 } from '@auth0/auth0-angular';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
     provideAnimationsAsync(),
     provideAuth0({
      domain: 'dev-781xtwr0nefxigdo.us.auth0.com',
      clientId: 'cV3pYgQOAOZSj7xOWHimHhrGqnXhfMve',
      authorizationParams: {
        redirect_uri: window.location.origin,
        scope: 'openid profile email offline_access',
        audience: 'https://dev-781xtwr0nefxigdo.us.auth0.com/api/v2/'
      },
      cacheLocation: 'localstorage',
      useRefreshTokens: true,
    }),
    provideHttpClient(withInterceptors([AuthInterceptor]))
    ]
};
