import { DataService } from 'src/app/shared/services/data.service';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  @Input() productList?: Product[] = [];

  baseImageSrc: string = '../../../../../assets/products/'

  constructor(private router: Router, public dataService: DataService) {}

  onElement(text: string, e: any) {
    const description: HTMLElement | null = document.getElementById(text)    

    description!.style.left = e.pageX - (description!.offsetWidth / 2) + 'px';
    description!.style.top = e.pageY + -40 + 'px';
  }

  viewProduct(imageName: string) {
    this.router.navigate(['work', 'view', imageName]);
  }

  viewProductMobile(imageName: string, element: Element) {
    if (!element.classList.contains('description')) return;
    this.router.navigate(['work', 'view', imageName]);
  }

  showDescription(element: Element) {
    element.classList.add('description');
  }
}
