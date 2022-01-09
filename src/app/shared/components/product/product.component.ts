import { Component, Input, Output, EventEmitter} from "@angular/core"
import { RouterModule } from "@angular/router"
import { Product } from "./product.model"

@Component({
    selector: "app-product",
    templateUrl: "./product.component.html",
    styleUrls: ["./product.styles.scss"] 
})
export class ProductComponent{

    @Input() product: Product 
    @Output() clickedProduct: EventEmitter<string> = new EventEmitter()

    today: Date = new Date()
    
    addToCart(){
        console.log("add To Cart")
        this.clickedProduct.emit(this.product.id)
    }

}