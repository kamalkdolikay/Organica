import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  name: String = '';
  password: String = '';
  email: String = '';

  constructor(
    private authService:AuthService,
    ) { }

  ngOnInit(): void {
  }

  onRegister() {
    const user = {
      name: this.name,
      password: this.password,
      email: this.email
    }

    this.authService.register(user).subscribe(data => {
      console.log('data', data);
    })
  }
}
