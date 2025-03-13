import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuftbornTaskAuthService } from '../services/auth.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [CommonModule, MatToolbarModule, MatButtonModule],
})
export class NavbarComponent {
  user$ = this.authService.user$;
  isAuthenticated$ = this.authService.isAuthenticated$;

  constructor(private authService: LuftbornTaskAuthService) {}

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
