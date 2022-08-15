import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddressModel, userDataModel } from 'src/app/models/dataModel';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  addressForm = new FormGroup({
    city: new FormControl('Bangalore'),
    state: new FormControl('Karnataka'),
    pin: new FormControl(12345)
  });
  userNameCtrl = new FormControl('', Validators.required);
  emailCtrl = new FormControl('', Validators.required);

  addressList: AddressModel[] = [];
  userData: userDataModel[] = [];
  isLoading = false;
  addRecord = false;
  removeRecord = false;
  

  constructor() { }

  ngOnInit(): void {
  }

  addAddress(): void {
    this.addressList.push({
      city: this.addressForm.value.city!,
      state: this.addressForm.value.state!,
      pin: this.addressForm.value.pin!
    })
    this.addRecord = true;
  }

  deleteAddress(): void {
    this.addressForm.patchValue({
      city: 'Bangalore',
      state: 'Karnataka',
      pin: 12345
    })
    this.removeRecord = true;
  }

  registerUser(): void {
    this.isLoading = true;
    const storedData = JSON.parse(localStorage.getItem('userData') || '[]');

    if (storedData && storedData.length) {
      this.userData.push({
        id: storedData.length + 1,
        name: this.userNameCtrl.value!,
        email: this.emailCtrl.value!,
        address: this.addressList
      })
      
    } else {
    this.userData.push({
      id: 1,
      name: this.userNameCtrl.value!,
      email: this.emailCtrl.value!,
      address: this.addressList
    })
  }
    storedData.push(this.userData[0]);
    
    setTimeout(() => {
      this.isLoading = false;
      this.addRecord = true;
      localStorage.setItem('userData', JSON.stringify(storedData));
    }, 1000)
  }
}
