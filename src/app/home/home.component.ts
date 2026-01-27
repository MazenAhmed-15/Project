import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    products = [
    {
      name: 'Running Shoes',
      price: 189,
      image: 'assets/OIF.jpg',
      tag: 'NEW',
    },
    {
      name: 'Leather Sneakers',
      price: 219,
      image: 'assets/OIP (1).jpg',
      tag: 'HOT'
    },
    {
      name: 'Kids Sports Shoes',
      price: 149,
      image: 'assets/OIP (2).jpg',
      tag: ''
    },
    {
      name: 'Training Shoes',
      price: 199,
      image: 'assets/OIP (3).jpg',
      tag: 'SALE'
    }
  ];

  categories = ['Men', 'Women', 'Kids', 'Accessories'];

  

}
