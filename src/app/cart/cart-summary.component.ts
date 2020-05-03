import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  @Input() cartproductsa: String[];

  constructor() { }



  ngOnInit(): void {
  }
  cartproducts = [
    { name: "Coke", quantity  : 1 , price: "35.00" , imgurl : "assets/img/coke.jpg" ,message:''},
    { name: "Sprite", quantity  : 2 , price: "45.00" , imgurl : "assets/img/sprite.jpg" ,message:''},
    { name: "Pepsi", quantity  :1 , price: "25.00" , imgurl : "assets/img/pepsi.jpg" ,message:''},
    { name: "Maaza", quantity  : 4 , price: "60.00" , imgurl : "assets/img/maaza.jpg" ,message:''}
  ];

  subTotal = 0;
}
