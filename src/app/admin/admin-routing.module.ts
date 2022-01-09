import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
 
  {
    path:"",
    component: NavComponent,
    children: [
      {
        path: "create",
        component: ProductFormComponent
      },
      {
        path: "products",
        component: ProductListComponent
      },
      {
        path: "",
        component: DashboardComponent
         
      },
      {
        path: "inventory",
        component: InventoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
