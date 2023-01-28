import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-dialog',
  templateUrl: './view-dialog.component.html',
  styleUrls: ['./view-dialog.component.css']
})
export class ViewDialogComponent implements OnInit {
  
  public dialogRef?: MatDialogRef<ViewDialogComponent>
  constructor(@Inject(MAT_DIALOG_DATA) public data: MatDialog) { }

  ngOnInit(): void {
    console.log(this.data);
    
  }

}
