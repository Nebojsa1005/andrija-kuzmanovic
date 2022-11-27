import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductListComponent {

  @Input() productList?: Product[] = []

  
  constructor( private router: Router ) {}

  onElement(text: string, e: any) {
    const description: any = document.getElementById(text);

      description.style.left =( e.pageX ) + 'px';
      description.style.top = ( e.pageY + -30) + 'px';
  }

  viewProduct(imageName: string) {
    this.router.navigate(['work', 'view', imageName] )
  }
  viewProductMobile(imageName: string, element: Element) {
    if (element.classList.contains('description')) {
      this.router.navigate(['work', 'view', imageName] )
    }
  }

  showDescription(element: Element) {
    element.classList.add('description')
  }
}
