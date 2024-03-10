import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit {

  public productID:any;
  public prods:any;
  product: any;

  constructor( private activatedroute:ActivatedRoute,
    private authService:AuthService ) { }

  ngOnInit(): void {
    this.productID = this.activatedroute.snapshot.params['id'];
    let id = {
      id: this.productID
    }

    this.authService.getProduct(id).subscribe(data => {
      console.log('data', data);
      this.product = data[0];

    });

    this.authService.getProd().subscribe(data=>{
      console.log(data);
        this.prods = data;
      });
  }

}
