import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';

import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from '../shared/components/product/product.component';
import { ProductosService } from '../core/services/products/productos.service';

// Material
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent
    
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    ProductsRoutingModule,
    MaterialModule
  ],
  providers: [ProductosService]
})
export class ProductsModule { }
