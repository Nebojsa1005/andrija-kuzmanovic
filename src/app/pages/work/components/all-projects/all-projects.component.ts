import { DataService } from '../../../../shared/services/data.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AllProjectsItem } from 'src/app/pages/home/models/products';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllProjectsComponent implements OnInit  {

  productList: any = []

  get wantedProductList(): any {

    let wantedProductList: AllProjectsItem[][] = []
    let group: AllProjectsItem[] = []

    this.productList.forEach((product: AllProjectsItem) => {
      if ( group.length >= 2 ) {
        group = []
        wantedProductList.push(group)
      }
      group.push(product)
    })      
    return wantedProductList
  }

  constructor(private dataService: DataService) {}
  
  ngOnInit(): void {
    this.productList = this.dataService.productList
  }
  
  
  onElement(text: string, e: any) {   
    let rect = e.target.getBoundingClientRect();

    const description: any = document.getElementById(text);

      description.style.left =( e.clientX - rect.left ) + 'px';
      description.style.top = ( e.clientY - rect.top) + 'px';
  }

  identify(index: any, item: any) {
    return item.shortDescription
  }

}
