import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/components/product/product.model';
import { ProductosService } from 'src/app/core/services/products/productos.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  products: Array<Product>

  constructor(
    private productsService:ProductosService
  ) { }


  
  ngOnInit(): void {
    
    this.fetchProducts()
    
  }
  
  getAddToCartid(id: string){

    console.log(id)
  }

  fetchProducts(){
    this.productsService.getAllProducts().subscribe(products => this.products = products)
  }
}
