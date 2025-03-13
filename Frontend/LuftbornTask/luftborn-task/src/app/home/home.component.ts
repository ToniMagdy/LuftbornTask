import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuftbornTaskAuthService } from '../services/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, MatButtonModule],
})
export class HomeComponent implements OnInit {
  isAuthenticated$ = this.authService.isAuthenticated$;

  constructor(private authService: LuftbornTaskAuthService, private router: Router) {}

  ngOnInit() {
    this.isAuthenticated$.subscribe((isAuth) => {
      if (isAuth) {
        this.router.navigate(['/products']); // ✅ Redirect to Products Page
      }
    });
  }

  login() {
    this.authService.login();
  }
}
