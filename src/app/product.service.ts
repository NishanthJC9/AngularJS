import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProduct(){
    let products:Product[]

    products = [
      new Product(1, "keyboard", 5000),
      new Product(2, "mouse", 3500),
      new Product(3, "cpu", 4000)
    ]
    return products
  }

}
