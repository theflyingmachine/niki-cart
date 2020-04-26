import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
  {path: "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: BodyComponent},
  {path: "shopping", component: ShoppingComponent},
  {path: "cart", component: CartComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
