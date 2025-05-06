import { Component } from '@angular/core';
import { DataBindingComponent } from '../data-binding/data-binding.component';
import { FormPageComponent } from '../form-page/form-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  imports: [DataBindingComponent,FormPageComponent,ReactiveFormsModule,RouterModule,CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  sharedData: any;
  receivedData(data: any) {
    this.sharedData = data;
    console.log('Received Data:', this.sharedData);
  }
}
