import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;

  constructor(
    private authService:AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }

  public onLogin() {
    let user = {
      email: this.username,
      password: this.password
    }

    this.authService.login(user).subscribe(data => {
      if(data.success){
        this.authService.storeUserData(data.token, data._id)
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['/login']);
      }
    }) 
  }

}
