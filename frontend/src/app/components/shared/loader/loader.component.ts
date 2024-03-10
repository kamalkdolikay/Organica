import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css',
  encapsulation: ViewEncapsulation.None
})
export class LoaderComponent {

  @Input() isloading: boolean = false;

}
