import { DataService } from '../../../../shared/services/data.service';
import { Product } from './../../../home/models/products';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  product?: Product
  baseImageSrc: string = '../../../../../assets/products/'

  constructor(
    private route: ActivatedRoute,
    public dataService: DataService
  ) { }

  ngOnInit(): void {
    const productName = this.route.snapshot.params['productName']
    this.product = this.dataService.getProduct(productName)
  }

}
