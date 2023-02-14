import { DataService } from './../../../../../shared/services/data.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-dialog',
  templateUrl: './view-dialog.component.html',
  styleUrls: ['./view-dialog.component.scss']
})
export class ViewDialogComponent implements OnInit {
  baseImageSrc: string = '../../../../../../assets/products/'

  
  public dialogRef?: MatDialogRef<ViewDialogComponent>
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dataService: DataService) { }

  product?: string
  image?: string
  ngOnInit(): void {
    this.product = this.data.product
    this.image = this.data.image
  }

}
