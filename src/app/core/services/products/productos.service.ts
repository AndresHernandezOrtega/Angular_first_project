import { Injectable } from '@angular/core';
import { Product } from '../../../shared/components/product/product.model';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private http:HttpClient
  ) { }

  getAllProducts (){
    return this.http.get<Product[]>(environment.urlAPI + "/products")
  }

  getProduct(id:string) {
    
    return this.http.get<Product>( `${environment.urlAPI}/products/${id}`)
  }

  createProduct(product:Product){

    return this.http.post(environment.urlAPI + "/products", product)
  }

  updateProduct(id: string, changes: Partial<Product>){

    return this.http.put(environment.urlAPI + "/products/" + id, changes)
  }

  deleteProduct(id:string){

    return this.http.delete(environment.urlAPI + "/products/" + id)
  }
}
