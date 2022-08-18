import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home.component';
import { AppModule } from '../app.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BookComponent } from '../book/book.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule, 
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CommonModule,
  ],
  bootstrap: [HomeComponent]

})
export class HomeModule { }
