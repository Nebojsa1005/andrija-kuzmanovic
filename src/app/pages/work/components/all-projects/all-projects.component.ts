import { Product } from './../../../home/models/products';
import { DataService } from '../../../../shared/services/data.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AllProjectsItem } from 'src/app/pages/home/models/products';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllProjectsComponent implements OnInit {

  productList: any = []

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

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.productList = this.dataService.productList
  }

  
  mapOrder(types: string[]): string[] {
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

    types.sort((a: string, b: string) => order.indexOf(a) - order.indexOf(b));

    return types;
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
