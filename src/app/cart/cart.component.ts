import { Component,OnInit } from '@angular/core';
import { CartService } from '../services/Cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCart();
  }

  removeItem(index: number) {
    this.cartService.removeFromCart(index);
    this.cartItems = this.cartService.getCart();
  }

  get subtotal() {
    return this.cartItems.reduce(
      (sum, item) => sum + item.price,
      0
    );
  }
  
}
