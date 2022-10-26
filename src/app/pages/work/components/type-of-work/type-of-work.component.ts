import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/pages/home/models/products';
import { DataService } from '../../../../shared/services/data.service';

@Component({
  selector: 'app-type-of-work',
  templateUrl: './type-of-work.component.html',
  styleUrls: ['./type-of-work.component.css']
})
export class TypeOfWorkComponent implements OnInit {

  productList?: Product[]  
  types: any = []

  constructor( private dataService: DataService ) { }

  ngOnInit(): void {
    this.productList = this.dataService.productList
    this.getProducts()
  }

  getProducts() {
    this.productList?.forEach((product: Product) => {
      if (this.types.indexOf(product.typeOfWork) == -1 && product.typeOfWork) {
        this.types.push(product.typeOfWork)
      } else {
        return
      }

    })    
  }
  
}
