import { DataService } from '../../../../shared/services/data.service';
import { Product } from './../../../home/models/products';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  product?: Product
  baseImageSrc: string = '../../../../../assets/products/'

  get sideImagesNum() {
    if (!this.product) return -1
    return this.product.sideImages.length - 1
  }

  constructor(
    private route: ActivatedRoute,
    public dataService: DataService
  ) { }

  ngOnInit(): void {
    const productName = this.route.snapshot.params['productName']
    this.product = this.dataService.getProduct(productName)
  }

}
