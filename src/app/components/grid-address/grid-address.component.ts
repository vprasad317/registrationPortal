import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { AddressModel } from 'src/app/models/dataModel';

@Component({
  selector: 'app-grid-address',
  templateUrl: './grid-address.component.html',
  styleUrls: ['./grid-address.component.scss']
})
export class GridAddressComponent implements ICellRendererAngularComp {

 address:AddressModel[] = [];
  constructor() { }

  agInit(params: ICellRendererParams<any, any>): void {
    this.address = (params && params.data) ? params.data.address : [];
    console.log( this.address);
  }

  refresh(params: ICellRendererParams<any, any>): boolean {
    return false
  }

}
