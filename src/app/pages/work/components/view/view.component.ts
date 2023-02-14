import { isMobile } from 'is-mobile';
import { DataService } from '../../../../shared/services/data.service';
import { Product } from './../../../home/models/products';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ViewDialogComponent } from './view-dialog/view-dialog.component';

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
    public dataService: DataService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    const productName = this.route.snapshot.params['productName']
    this.product = this.dataService.getProduct(productName)
  }

  openDialog(baseImageSrc: string, image: string, product: string) {
    if (isMobile()) return
    
    this.dialog.open(ViewDialogComponent, {
      height: 'auto',
      width: 'auto',
      data: {
        baseImageSrc,
        image,
        product
      }
    });
  }
}
