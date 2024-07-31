import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  product: Product[]
  productService

  @Input() name : any

  @Output() childData = new EventEmitter()

  triggerEvent(){
    this.childData.emit("Passing property From Child to Parent")
  }

  constructor(){
    this.productService = new ProductService()
  }

  getProd(){
    this.product = this.productService.getProduct();
    console.log(this.product)
  }
}
