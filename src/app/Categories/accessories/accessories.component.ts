import { Component } from '@angular/core';
import { CartService } from 'src/app/services/Cart.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent {
  products = [
    {
      name: 'Accessories',
      price: 18,
      image: 'assets/OIP (6).jpg',
      tag: 'NEW',
    },
    {
      name: 'Accessories',
      price: 18,
      image: 'assets/OIP (6).jpg',
      tag: 'NEW',
    },
    {
      name: 'Accessories',
      price: 18,
      image: 'assets/OIP (6).jpg',
      tag: 'NEW',
    },
    {
      name: 'Accessories',
      price: 18,
      image: 'assets/OIP (6).jpg',
      tag: 'NEW',
    },
    {
      name: 'Accessories',
      price: 18,
      image: 'assets/OIP (6).jpg',
      tag: 'NEW',
    },
    {
      name: 'Accessories',
      price: 18,
      image: 'assets/OIP (6).jpg',
      tag: 'NEW',
    },
    {
      name: 'Accessories',
      price: 18,
      image: 'assets/OIP (6).jpg',
      tag: 'NEW',
    },
    {
      name: 'Accessories',
      price: 18,
      image: 'assets/OIP (6).jpg',
      tag: 'NEW',
    },
    {
      name: 'Accessories',
      price: 18,
      image: 'assets/OIP (6).jpg',
      tag: 'NEW',
    },
    {
      name: 'Accessories',
      price: 18,
      image: 'assets/OIP (6).jpg',
      tag: 'NEW',
    },
    {
      name: 'Accessories',
      price: 18,
      image: 'assets/OIP (6).jpg',
      tag: 'NEW',
    },
    {
      name: 'Accessories',
      price: 18,
      image: 'assets/OIP (6).jpg',
      tag: 'NEW',
    },
    
  ];
  
  constructor(private cartService: CartService) {}
  
  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
