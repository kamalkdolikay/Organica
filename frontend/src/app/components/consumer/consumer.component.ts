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
  isProducts: boolean = false;
  carts: any

  constructor(
    private authService:AuthService,
    ) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe(data => {
      this.user = data;
    })
    let products = localStorage.getItem('cart');
    if(products == null){
      this.carts = [{name: 'Add products to cart'}];
    } else {
      this.isProducts = true;
      this.carts = JSON.parse(products);
    }
  }
}
