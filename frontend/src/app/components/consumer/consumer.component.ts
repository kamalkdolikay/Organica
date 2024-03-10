import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrl: './consumer.component.css'
})
export class ConsumerComponent implements OnInit {
  isLogin: boolean = false;
  user!: any;

  constructor(
    private authService:AuthService,
    ) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe(data => {
      this.user = data;
    })
  }
}
