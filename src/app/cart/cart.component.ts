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
    { name: "Coke", quantity  : 1 , price: "35.00" , imgurl : "assets/img/coke.jpg" ,message:''},
    { name: "Sprite", quantity  : 2 , price: "45.00" , imgurl : "assets/img/sprite.jpg" ,message:''},
    { name: "Pepsi", quantity  :1 , price: "25.00" , imgurl : "assets/img/pepsi.jpg" ,message:''},
    { name: "Maaza", quantity  : 4 , price: "60.00" , imgurl : "assets/img/maaza.jpg" ,message:''}
  ];


  //Increment and decrement
// message: string;

increment(units:number,index:number) 
{
  if(units < 15){
    this.cartproducts[index].quantity += 1;  
    this.cartproducts[index].message = ' ';   
  }
  else
  {
    if(units >=15)
    {
      this.cartproducts[index].message = 'Maximum reached!';
    }
 } 
}

decrement(units:number,index:number) 
{
  if(units > 0){
    this.cartproducts[index].quantity -= 1;  
    this.cartproducts[index].message = ' ';  
  }
  else if(units==0)
    {
      this.cartproducts[index].message = 'Minimum reached!';
    }
       
  }


}
