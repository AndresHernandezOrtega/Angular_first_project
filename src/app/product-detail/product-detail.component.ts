import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductosService } from '../core/services/products/productos.service';
import { Product } from '../shared/components/product/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {

  detailId: string
  productData: Product
  fetchData: Object

  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService
    ) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {

      this.detailId = params["id"]
      console.log(this.detailId)
      this.productosService.getProduct(this.detailId).subscribe(product => {
        this.productData = product
      })

      
    })
  }

}
