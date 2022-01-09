import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/shared/components/product/product.model';

import { ProductosService } from 'src/app/core/services/products/productos.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  products: Array<Product> = []
  tableColumns: Array<string> = ["id", "title", "price", "actions"]
  
  constructor(
    private productosService:ProductosService
  ) { }

  ngOnInit(): void {

    this.fetchProducts()
    
  }

  fetchProducts(){
    this.productosService.getAllProducts()
    .subscribe(products => {
      this.products = products

      console.log(this.products)
    })
  }

  deleteProduct(id: string){

    this.productosService.deleteProduct(id)
    .subscribe(res => console.log(res))

    this.products = this.products.filter(product => product.id !== id)


  }

}
