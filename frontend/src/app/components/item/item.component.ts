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
  public items:Array<any> = new Array(4);
  product: any;

  constructor( private activatedroute:ActivatedRoute,
    private authService:AuthService ) {
     }

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

    

  compareItem(name:any) {
    if (name == "Naniamo Radishes") {
      return "Grown in the lush fields of Naniamo, where the soil is" 
      + " kissed by coastal breezes and nurtured by rich volcanic minerals," 
      + " these radishes develop their unique character. Each radish is hand-selected" 
      + " for its perfect round shape and vibrant red hue, promising a visual feast" 
      + " before you even take a bite.";
    } else if (name == "Victoria Sprouts") {
      return "With their delicate green leaves and tender stems, Victoria Sprouts" 
      + " offer a taste experience fit for royalty. Each sprout is handpicked at" 
      + " the peak of perfection, ensuring maximum flavor and nutrition in every bite."
      + " But don't let their small stature fool you Victoria Sprouts are big on taste!" 
      + " Their mild, nutty flavor profile pairs perfectly with a variety of dishes, from" 
      + " hearty salads to savory stir-fries. Plus, they're packed with vitamins, minerals," 
      + " and antioxidants, making them a nutritious addition to any meal.";
    } else if (name == "Stanley Beans") {
      return "These beans boast a flavor profile that's unmatched in the vegetable kingdom." 
      + " With each tender bite, you'll experience a burst of freshness and a subtle sweetness"
      + " that will tantalize your taste buds like never before. Whether steamed, sautéed, or"
      + " roasted, Stanley Beans retain their crisp texture and unparalleled flavor, making"
      + " them a must-have ingredient for any discerning chef.";
    } else if (name == "Brentwood Peas") {
      return "These vibrant green gems are harvested at the peak of ripeness, ensuring maximum"
      + " sweetness and crunch in every bite. With their tender pods and plump peas, they offer"
      + " a burst of flavor that's both satisfying and delicious. But it's not just their taste"
      + " that sets Brentwood Peas apart – it's their versatility in the kitchen. Whether you steam"
      + " them to perfection, toss them into salads for a pop of color, or sauté them with garlic"
      + " and herbs for a flavorful side dish, Brentwood Peas are sure to elevate any meal.";
    }
    return "Good product. Very good.";
  }

}
