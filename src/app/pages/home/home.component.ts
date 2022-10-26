
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CarouselItem, ProductListItem } from './models/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent  {

  carouselImages: CarouselItem[] = [
    { name: 'caffe-d-italia-social-media' },
    { name: 'ducati-genova' },
    { name: 'oshee-social-media' },
    { name: 'insel-sleep' }
  ]
  
  productList: ProductListItem[] = [
    {
      imageName: 'dasigo',
      description: 'Dasigo webpage'
    },
    {
      imageName: 'oshee-energy-drink',
      description: 'Oshee energy drink campaign'
    },
    {
      imageName: 'proteo-fit-chocolate-bar',
      description: 'ProteoFIT chocolate bar package'
    },
    {
      imageName: 'vintage-fest',
      description: 'Vintage fest'
    },
    {
      imageName: 'stara-rakija',
      description: 'Stara rakija billboard'
    },
    {
      imageName: 'immunity-chef',
      description: 'Immunity Chef Branding'
    }
  ]
}
