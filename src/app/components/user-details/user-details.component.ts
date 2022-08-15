import { Component, OnInit } from '@angular/core';
import { ColDataModel, UserColDefs, userDataModel } from 'src/app/models/dataModel';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  columnDefs:ColDataModel[] = UserColDefs;
  rowData:userDataModel[] = [];
  isPopupVisible = false;
  itemTobeDeleted: any;
  isLoading = false;

  constructor(public service: AppService) { 
    this.service.deletedItem.subscribe(data => {
      if (data) {
        this.itemTobeDeleted = data;
        this.isPopupVisible = true;
      }
    })
  }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(): void {
    this.rowData = JSON.parse(localStorage.getItem('userData') || '[]');
  }

  closePopup(): void {
    this.isPopupVisible = false;
  }

  deleteRecord(): void {
    if(this.rowData.length) {
      this.rowData = this.rowData.filter(ele => ele.id !== this.itemTobeDeleted.id);
      localStorage.setItem('userData', JSON.stringify(this.rowData));
    }
    this.isPopupVisible = false;
    window.location.reload();
  }
}
