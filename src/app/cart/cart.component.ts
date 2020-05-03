import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ElementArrayFinder } from 'protractor';
import { CartSummaryComponent } from '../cart/cart-summary.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [ApiService]
})
export class CartComponent implements OnInit {

  cart = [];

  constructor(private api: ApiService) {
    this.getCart();
   }

  ngOnInit(): void {
  }

  getCart = () => { 
    this.api.getCartProducts().subscribe(
      data => {
        data.forEach(element => {
          
       });
       this.cart = data;
      },
      error => {
        console.log(error);
      }
    )
   }

  //Increment and decrement
// message: string;

increment(units:number,index:number) 
{
  if(units < 15){
    this.cart[index].quantity += 1;  
    this.cart[index].message = ' ';  
    this.updateCart(this.cart[index].id, this.cart[index].name, this.cart[index].quantity,this.cart[index].imgurl) 
  }
  else
  {
    if(units >=15)
    {
      this.cart[index].message = 'Maximum reached!';
    }
 } 
}

decrement(units:number,index:number) 
{
  if(units > 0){
    this.cart[index].quantity -= 1;  
    this.cart[index].message = ' '; 
    this.updateCart(this.cart[index].id, this.cart[index].name, this.cart[index].quantity, this.cart[index].imgurl)
  }
  else if(units==0)
    {
      this.cart[index].message = 'Minimum reached!';
    }
       
  }


  updateCart = (itmeid, itmename, quantity, imgurl) => {
      
    this.api.updateCartProduct(itmeid, itmename, quantity, imgurl).subscribe( 
      data => {
        this.getCart();
      },
      error => {
        console.log(error);
      }
    );
  }


}
