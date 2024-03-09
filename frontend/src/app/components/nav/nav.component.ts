import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  isLogin: boolean = false;

  constructor(
    private authService:AuthService,
    private router:Router) { }

  ngOnInit(): void {
    let token = this.authService.loadToken()
    if(token) {
      this.isLogin = true
     } else {
      this.isLogin = false
     }
  }

  goHomeBuddy() {
    this.router.navigate([''])
  }

  onLogin() {
    this.router.navigate(['/login'])
  }

  onLogout() {
    this.authService.logout()
    this.router.navigate(['/login'])
  }

  accountPage() {
    this.router.navigate(['/account'])
  }
}
