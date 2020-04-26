import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    products = [
     { name: "Coke", description  : "Black Cold Drink" , price: "35.00" , imgurl : "assets/img/coke.jpg" },
     { name: "Sprite", description  : "Clear Cold Drink, Clear hai" , price: "45.00" , imgurl : "assets/img/sprite.jpg" },
     { name: "Pepsi", description  : "Little brown, ye pyas hai badi" , price: "25.00" , imgurl : "assets/img/pepsi.jpg" },
     { name: "Maaza", description  : "Aam cold drink, made from real mango pulp" , price: "60.00" , imgurl : "assets/img/maaza.jpg" },
     { name: "Fanta", description  : "Only orange and sugar. best for orange lips." , price: "10.00" , imgurl : "assets/img/fanta.jpg" },
     { name: "Coke", description  : "Black Cold Drink" , price: "35.00" , imgurl : "assets/img/coke.jpg" },
     { name: "Sprite", description  : "Clear Cold Drink, Clear hai" , price: "45.00" , imgurl : "assets/img/sprite.jpg" },
     { name: "Pepsi", description  : "Little brown, ye pyas hai badi" , price: "25.00" , imgurl : "assets/img/pepsi.jpg" },
     { name: "Maaza", description  : "Aam cold drink, made from real mango pulp" , price: "60.00" , imgurl : "assets/img/maaza.jpg" },
     { name: "Fanta", description  : "Only orange and sugar. best for orange lips." , price: "10.00" , imgurl : "assets/img/fanta.jpg" },  
 
    ];
}
