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

  // productList: any
  productList: any = [
    {
      imageName: 'insel-sleep',
      description: 'Insel webpage',
      isBigger: true,
    },
    {
      imageName: 'oshee-social-media',
      description: 'Oshee social media',
      isBigger: false
    },
    {
      imageName: 'dasigo',
      description: 'Dasigo webpage',
      isBigger: false
    },
    {
      imageName: 'oshee-energy-drink',
      description: 'Oshee energy drink campaign',
      isBigger: true
    },
    {
      imageName: 'ducati-genova-webpage',
      description: 'Ducati Genova webpage',
      isBigger: true
    },
    {
      imageName: 'immunity-chef',
      description: 'Immunity Chef Branding',
      isBigger: false
    },
    {
      imageName: 'proteo-fit-chocolate-bar-white',
      description: 'ProteFit chocolate bar',
      isBigger: false
    },
    {
      imageName: 'vintage-fest',
      description: 'Vintage fest',
      isBigger: true
    },
    {
      imageName: 'caffe-d-italia-social-media',
      description: "Caffe d' Italia social media",
      isBigger: true
    },
    {
      imageName: 'stara-rakija',
      description: 'Stara rakija billboard',
      isBigger: false
    },
    {
      imageName: 'proteo-fit-chocolate-bar-dark',
      description: "ProteoFit chocolate bar",
      isBigger: false
    },
    {
      imageName: 'urban-divine-brandy',
      description: 'Urban divine brandy',
      isBigger: true
    },
    {
      imageName: 'urban-divine-brandy',
      description: 'Urban divine brandy',
      isBigger: false
    }
   
  ]

  get wantedProductList(): any[][] {

    let wantedProductList: AllProjectsItem[][] = []
    let group: AllProjectsItem[] = []

    this.productList.forEach((product: AllProjectsItem) => {
      if ( group.length >= 2 ) {
        group = []
        wantedProductList.push(group)
      }

      group.push(product)

    })
    console.log(wantedProductList);
    
    return wantedProductList
  }

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.productList = this.dataService.productList
  }
}
