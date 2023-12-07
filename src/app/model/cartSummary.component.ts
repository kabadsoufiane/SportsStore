import { Component } from "@angular/core";
import { Cart } from "./cart.model";

@Component({
    selector: "cart-summary",
    templateUrl: "cartSummary.component.html"
})
export class cartSummaryComponent {
    constructor(public cart: Cart) { }
}