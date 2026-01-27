import { Component } from '@angular/core';
import { CartService } from 'src/app/services/Cart.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent {
  products = [
    {
      name: 'Women Shoes',
      price: 180,
      image: 'assets/OIP (5).jpg',
      tag: 'NEW',
    },
    {
      name: 'Women Shoes',
      price: 180,
      image: 'assets/OIP (5).jpg',
      tag: 'NEW',
    },
    {
      name: 'Women Shoes',
      price: 180,
      image: 'assets/OIP (5).jpg',
      tag: 'NEW',
    },
    {
      name: 'Women Shoes',
      price: 180,
      image: 'assets/OIP (5).jpg',
      tag: 'NEW',
    },
    {
      name: 'Women Shoes',
      price: 180,
      image: 'assets/OIP (5).jpg',
      tag: 'NEW',
    },
    {
      name: 'Women Shoes',
      price: 180,
      image: 'assets/OIP (5).jpg',
      tag: 'NEW',
    },
    {
      name: 'Women Shoes',
      price: 180,
      image: 'assets/OIP (5).jpg',
      tag: 'NEW',
    },
    {
      name: 'Women Shoes',
      price: 180,
      image: 'assets/OIP (5).jpg',
      tag: 'NEW',
    },
    {
      name: 'Women Shoes',
      price: 180,
      image: 'assets/OIP (5).jpg',
      tag: 'NEW',
    },
    {
      name: 'Women Shoes',
      price: 180,
      image: 'assets/OIP (5).jpg',
      tag: 'NEW',
    },
    {
      name: 'Women Shoes',
      price: 180,
      image: 'assets/OIP (5).jpg',
      tag: 'NEW',
    },
    {
      name: 'Women Shoes',
      price: 180,
      image: 'assets/OIP (5).jpg',
      tag: 'NEW',
    },]

    constructor(private cartService: CartService) {}
    
    addToCart(product: any) {
      this.cartService.addToCart(product);
    }
}
