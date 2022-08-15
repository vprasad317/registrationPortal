import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { GridAddressComponent } from './components/grid-address/grid-address.component';
import { CommonModule } from '@angular/common';
import { GridOperationsComponent } from './components/grid-operations/grid-operations.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserRegistrationComponent,
    UserDetailsComponent,
    GridAddressComponent,
    GridOperationsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
