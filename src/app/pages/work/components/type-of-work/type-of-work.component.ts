import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Product } from 'src/app/pages/home/models/products';
import { DataService } from '../../../../shared/services/data.service';

@Component({
  selector: 'app-type-of-work',
  templateUrl: './type-of-work.component.html',
  styleUrls: ['./type-of-work.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypeOfWorkComponent implements OnInit {

  productList?: Product[]
  types: string[] = []
  orderedTypes: string[] = []
  order: string[] = ['UX / UI design', 'Digital Design', 'Branding', 'Packaging', 'Social Media']

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.productList = this.dataService.productList
    this.getProducts()
    this.orderedTypes = this.mapOrder(this.types);
  }

  getProducts() {
    this.productList?.forEach((product: Product) => {
      if (this.types.indexOf(product.typeOfWork) !== -1) return
      this.types.push(product.typeOfWork)
    })    
  }

  mapOrder(types: string[]): string[] {
    return types.sort((a: string, b: string) => this.order.indexOf(a) - this.order.indexOf(b));    
  };

}
