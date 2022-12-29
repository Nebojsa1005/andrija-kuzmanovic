import { Product } from './../../../home/models/products';
import { DataService } from '../../../../shared/services/data.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllProjectsComponent implements OnInit {

  productList: any = []
  baseImageSrc: string = '../../../../../assets/products/'

  get wantedProductList(): any {

    let wantedProductList: Product[][] = []
    let group: Product[] = []
    this.productList.forEach((product: Product, index: number, array: Product[]) => {
      group.push(product)

      if (group.length === 2) {
        wantedProductList.push(group)
        group = []
      }

      if (index === array.length - 1 && group.length > 0)
        wantedProductList.push(group)
    })

    return wantedProductList
  }

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.productList = this.dataService.productList
    this.mapOrder()
  }

  mapOrder() {
    const order: string[] = [
      'insel-webpage',
      'oshee-social-media',
      'dasigo',
      'oshee-energy-drink-campaign',
      'ducati-genova-webpage',
      'immunity-chef',
      'tesla-charge-batteries',
      'its-game-time',
      'caffe-d-italia-social-media',
      'stara-rakija-billboard',
      'proteo-fit-chocolate-bar',
      'vingate-fest',
      'waterfront-market',
      'osteria-mozzarella-social-media',
      'proteo-fit-chocolate-bar-dark'
    ]

    const names = this.productList.map((product: Product) => {
      if (!order.indexOf(product.name)) return
      return product.name
    })
    names.sort((a: Product, b: Product) => order.indexOf(a.name) - order.indexOf(b.name));
  };

  onElement(text: string, e: any) {
    let rect = e.target.getBoundingClientRect();

    const description: any = document.getElementById(text);

    description.style.left = (e.clientX - rect.left) + 'px';
    description.style.top = (e.clientY - rect.top) + 'px';
  }

  identify(index: any, item: any) {
    return item.shortDescription
  }
}
