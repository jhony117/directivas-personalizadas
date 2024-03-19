import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPagesComponent } from './pages/products-pages/products-pages.component';

const routes: Routes =  [{
  path : '',
  children : [
    {path: 'products', component : ProductsPagesComponent},
    {path : '**', redirectTo: 'products'}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
