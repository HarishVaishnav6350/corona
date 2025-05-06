import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [CommonModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  formPage:boolean=false
 
@Input() RenderData:any;
constructor(){
 
  
}

codeSnippet:string = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
courseName:string = 'Angular';
rollNo:number = 1234;
isDisabled:boolean = false;
inputType:string = 'checkbox';
currentDate:Date = new Date();
constructor(){
  this.courseName='Angular';
  this.rollNo=1234;
  this.isDisabled=false;
  this.inputType='checkbox'; 
}`
 
 
}
