import { Component } from '@angular/core';
import { CartService } from 'src/app/services/Cart.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent {
 products = [
    {
      name: 'Kids Shoes',
      price: 149,
      image: 'assets/OIP (2).jpg',
      tag: 'NEW',
    },
    {
      name: 'Kids Shoes',
      price: 149,
      image: 'assets/OIP (2).jpg',
      tag: 'NEW',
    },
    {
      name: 'Kids Shoes',
      price: 149,
      image: 'assets/OIP (2).jpg',
      tag: 'NEW',
    },
    {
      name: 'Kids Shoes',
      price: 149,
      image: 'assets/OIP (2).jpg',
      tag: 'NEW',
    },
    {
      name: 'Kids Shoes',
      price: 149,
      image: 'assets/OIP (2).jpg',
      tag: 'NEW',
    },
    {
      name: 'Kids Shoes',
      price: 149,
      image: 'assets/OIP (2).jpg',
      tag: 'NEW',
    },
    {
      name: 'Kids Shoes',
      price: 149,
      image: 'assets/OIP (2).jpg',
      tag: 'NEW',
    },
    {
      name: 'Kids Shoes',
      price: 149,
      image: 'assets/OIP (2).jpg',
      tag: 'NEW',
    },
    {
      name: 'Kids Shoes',
      price: 149,
      image: 'assets/OIP (2).jpg',
      tag: 'NEW',
    },
    {
      name: 'Kids Shoes',
      price: 149,
      image: 'assets/OIP (2).jpg',
      tag: 'NEW',
    },
    {
      name: 'Kids Shoes',
      price: 149,
      image: 'assets/OIP (2).jpg',
      tag: 'NEW',
    },
    {
      name: 'Kids Shoes',
      price: 149,
      image: 'assets/OIP (2).jpg',
      tag: 'NEW',
    },
    
  ];

  constructor(private cartService: CartService) {}
  
  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
