import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICellRendererAngularComp, ILoadingCellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-grid-operations',
  templateUrl: './grid-operations.component.html',
  styleUrls: ['./grid-operations.component.scss']
})
export class GridOperationsComponent implements ICellRendererAngularComp {

  data: any;

  constructor(public service: AppService) { }

 agInit(params: ICellRendererParams<any, any>): void {
   this.data = params.data;
 }

 refresh(params: ICellRendererParams<any, any>): boolean {
   return false;
 }

 deleteData(): void {
  this.service.deletedItem.next(this.data);
 }
}
