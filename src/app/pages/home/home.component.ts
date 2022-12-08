
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { CarouselItem, Product, ProductListItem } from './models/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

  order = ['dasigo', 'oshee-energy-drink', 'proteo-fit-chocolate-bar-white', 'vintage-fest', 'stara-rakija-billboard', 'immunity-chef']

  productList?: Product[]
  carouselImages: CarouselItem[] = [
    { name: 'caffe-d-italia-social-media' },
    { name: 'ducati-genova-webpage' },
    { name: 'oshee-social-media' },
    { name: 'insel-sleep' }
  ]
  
  constructor( private dataService: DataService ) {
    this.productList = this.dataService.productList
    this.productList = this.productList?.filter((product: Product) => this.order.indexOf(product.name) >= 0)
    this.productList.sort((a: Product, b: Product) => this.order.indexOf(a.name) - this.order.indexOf(b.name));
  }
  
}
