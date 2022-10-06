import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
public title: String;
public list: Product[];
priceMax: number = 100;
  constructor() {

  }

  ngOnInit(): void {

    this.title='My app Store'
    this.list=[
      {
        id:12,
        title: 'tshirt',
        price: 32,
        description:'nice',
        category: 'shirts',
        picture:'https://www.jennyfer.com/dw/image/v2/AAQC_PRD/on/demandware.static/-/Sites-jennyfer-catalog-master/default/dw98892066/images/10036256C060_82_G.jpg?sw=500',
        nbrLike:0,
        quantity:0
      },
      {
        id:12,
        title: 'tshirt',
        price: 28,
        description:'nice',
        category: 'shirts',
        picture:'https://i5.walmartimages.com/asr/ff7f167a-31b0-4761-aa40-5a3955ccc1d1_1.5bb405b25d964a125b08fb9db22465d9.jpeg',
        nbrLike:0,
        quantity:20
      },

    ]
  }
  increamentlike(product:Product): void{
let i= this.list.indexOf(product);
if(i != -1){
  this.list[i].nbrLike++
  //connct to the back side
}
  }
  buyProduct(product:Product): void{
    let i= this.list.indexOf(product);
    if(i != -1){
      this.list[i].quantity--
      //connct to the back side
    }
      }

}
