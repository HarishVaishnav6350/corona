import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent   {
@Input() filteredData: any;
 searchTerm:string = '';
 formresult: any[] = [];
 noData:boolean=false

 
 onSearch(): void {
 if(this.filteredData){
  this.formresult = this.filteredData?.filter((item: any) => 
    item.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
  this.noData = this.formresult.length === 0;
 }
 
 }

 window(prop:string): void {
    window.open(
      prop,       
      'popupWindow',       
      'width=auto,height=400,left=1000,top=100,status=no,menubar=no,toolbar=no,location=no,resizable=yes'
    );
}}
