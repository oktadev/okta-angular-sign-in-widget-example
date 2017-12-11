import { Injectable } from '@angular/core';
import * as OktaSignIn from '@okta/okta-signin-widget';

@Injectable()
export class Okta {
  widget;

  constructor() {
    this.widget = new OktaSignIn({
      baseUrl: 'https://dev-158606.oktapreview.com',
      clientId: 'RqjWvpvWO77qMGgDfukY',
      redirectUri: 'http://localhost:4200',
      authParams: {
        issuer: 'https://dev-158606.oktapreview.com/oauth2/default'
      }
    });
  }

  getWidget() {
    return this.widget;
  }
}
