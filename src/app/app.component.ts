import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Okta } from './shared/okta/okta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  user;
  oktaSignIn;

  constructor(private okta: Okta, private changeDetectorRef: ChangeDetectorRef) {
    this.oktaSignIn = okta.getWidget();
  }

  showLogin(): void {
    this.oktaSignIn.renderEl({el: '#okta-login-container'}, (response) => {
      if (response.status === 'SUCCESS') {
        this.user = response.tokens.idToken.claims.email;
        this.oktaSignIn.remove();
        this.changeDetectorRef.detectChanges();
      }
    });
  }

  async ngOnInit(): Promise<void> {
    try {
      this.user = await this.oktaSignIn.authClient.token.getUserInfo();
    } catch (error) {
      this.showLogin();
    }
  }

  logout(): void {
    this.oktaSignIn.authClient.signOut(() => {
      this.user = undefined;
      this.showLogin();
    });
  }
}
