import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ElementArrayFinder } from 'protractor';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
  providers: [ApiService]
})
export class ShoppingComponent implements OnInit {


  products = [];
  cart = [];
  selectedProduct = [];
  singleItem = [];

   constructor(private api: ApiService) {
    this.getProducts();
    this.getCart();
    this.selectedProduct
   }

   getProducts = () => { 
   this.api.getAllProducts().subscribe(
     data => {
      this.products = data;
     },
     error => {
       console.log(error);
     }
   )
  }


  getCart = () => { 
    this.api.getCartProducts().subscribe(
      data => {
       this.cart = data;
      },
      error => {
        console.log(error);
      }
    )
   }


  ngOnInit(): void {
  }

    addtoCart = (itme) => {
      this.getCart();
      let cartitems
      if(!this.cart.some(cartitem => cartitem.name === itme.name)){
      this.api.addProducttoCart(itme).subscribe(
        data => {
          this.selectedProduct.push(data);
          this.getCart();
        },
        error => {
          console.log(error);
        }
      );
    }else{
      for (const property in this.cart) {
        if ((`${this.cart[property].name}`) == itme.name){  
          let itmeid = (`${this.cart[property].id}`);
          let itemquantity = parseInt(`${this.cart[property].quantity}`);
          itemquantity++;
          this.updateCart(itmeid, (`${this.cart[property].name}`), itemquantity++, (`${this.cart[property].imgurl}`));
        }
      }
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