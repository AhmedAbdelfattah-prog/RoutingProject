import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminorderComponent } from './Admin/adminorder/adminorder.component';
import { AdminproductComponent } from './Admin/adminproduct/adminproduct.component';


const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path:'orders' , component:OrdersComponent},
  {path:'AdminOrders' , component:AdminorderComponent},
  {path:'AdminProducts' , component:AdminproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
