import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { LuftbornTaskAuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth-button',
  standalone: true,
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss'],
  imports: [CommonModule, MatButtonModule],
})
export class AuthButtonComponent {
  constructor(public authService: LuftbornTaskAuthService) {}
  
}
