import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductListItem } from '../../models/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductListComponent implements OnInit {

  @Input() productList: ProductListItem[] = []

  constructor( private router: Router ) {}

  ngOnInit(): void {

  }

  ngAfterViewInit() {
  }

  onElement(text: string, e: any) {
    const description: any = document.getElementById(text);

      description.style.left =( e.pageX ) + 'px';
      description.style.top = ( e.pageY + -30) + 'px';
  }

  viewProduct(imageName: string) {
    this.router.navigate(['work', 'view', imageName] )
  }
}
