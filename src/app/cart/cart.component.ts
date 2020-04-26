import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cartproducts = [
    { name: "Coke", quantity  : 1 , price: "35.00" , imgurl : "assets/img/coke.jpg" },
    { name: "Sprite", quantity  : 2 , price: "45.00" , imgurl : "assets/img/sprite.jpg" },
    { name: "Pepsi", quantity  :1 , price: "25.00" , imgurl : "assets/img/pepsi.jpg" },
    { name: "Maaza", quantity  : 4 , price: "60.00" , imgurl : "assets/img/maaza.jpg" }
  ];
  }
