import { CommonModule } from '@angular/common';
import { Component , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custmor-details',
  imports: [CommonModule],
  templateUrl: './custmor-details.component.html',
  styleUrl: './custmor-details.component.css'
})
export class CustmorDetailsComponent implements OnInit {
rendered: any;
customer:any[]=[]

ngOnInit() {
this.rendered=localStorage.getItem('custmors')
this.customer=JSON.parse(this.rendered)
console.log('aaya ki ',this.customer)
}}
