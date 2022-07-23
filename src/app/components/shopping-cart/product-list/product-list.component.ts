import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service'
import { Product } from 'src/app/models/product';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [
    {id:"1", name:"Fantastic Four", description:"CE Apprenticeship", price:"500", imageUrl:"/assets/Capture1.PNG"},
    {id:"2", name:"Fantastic Four", description:"CE Apprenticeship", price:"500", imageUrl:"/assets/Capture1.PNG"},
    {id:"3", name:"Fantastic Four", description:"CE Apprenticeship", price:"500", imageUrl:"/assets/Capture1.PNG"}
  ]
  wishlist: number[] = []

  constructor(
    private productService: ProductService,
    private wishlistService: WishlistService
  ) { }

  ngOnInit() {
    //this.loadProducts();
    //this.loadWishlist();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    })
  }

  loadWishlist() {
    this.wishlistService.getWishlist().subscribe(productIds => {
      this.wishlist = productIds
    })
  }
}
