import { Component } from '@angular/core';
import { CartService } from 'src/app/services/Cart.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent {
  
 products = [
    {
      name: 'Running Shoes',
      price: 189,
      image: 'assets/OIF.jpg',
      tag: 'NEW',
    },
    {
      name: 'Running Shoes',
      price: 189,
      image: 'assets/OIF.jpg',
      tag: 'NEW',
    },
    {
      name: 'Running Shoes',
      price: 189,
      image: 'assets/OIF.jpg',
      tag: 'NEW',
    },
    {
      name: 'Running Shoes',
      price: 189,
      image: 'assets/OIF.jpg',
      tag: 'NEW',
    },
    {
      name: 'Running Shoes',
      price: 189,
      image: 'assets/OIF.jpg',
      tag: 'NEW',
    },
    {
      name: 'Running Shoes',
      price: 189,
      image: 'assets/OIF.jpg',
      tag: 'NEW',
    },
    {
      name: 'Running Shoes',
      price: 189,
      image: 'assets/OIF.jpg',
      tag: 'NEW',
    },
    {
      name: 'Running Shoes',
      price: 189,
      image: 'assets/OIF.jpg',
      tag: 'NEW',
    },
    {
      name: 'Running Shoes',
      price: 189,
      image: 'assets/OIF.jpg',
      tag: 'NEW',
    },
    {
      name: 'Running Shoes',
      price: 189,
      image: 'assets/OIF.jpg',
      tag: 'NEW',
    },
    {
      name: 'Running Shoes',
      price: 189,
      image: 'assets/OIF.jpg',
      tag: 'NEW',
    },
    {
      name: 'Running Shoes',
      price: 189,
      image: 'assets/OIF.jpg',
      tag: 'NEW',
    },
    
  ];

constructor(private cartService: CartService,) {
  
}

addToCart(product: any) {
  this.cartService.addToCart(product);
}



}
