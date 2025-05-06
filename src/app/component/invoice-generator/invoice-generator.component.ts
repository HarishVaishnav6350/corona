import { CommonModule } from '@angular/common';
import { Component, ElementRef, model, signal, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-invoice-generator',
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './invoice-generator.component.html',
  styleUrl: './invoice-generator.component.css'
})
export class InvoiceGeneratorComponent {
  invoices: FormGroup;
  showInvoice =signal<boolean>(false);
  submittedData: any;
  invoiceNumber = Math.floor(100000 + Math.random() * 900000);  
  gstNumber = '27ABCDE1234F1Z5';  
  franchiseName = 'Harish Hundai Motors';
  franchiseAddress = '1234, MG Road, Bangalore, Karnataka, 560001';
  @ViewChild('invoiceSection') invoiceSection!: ElementRef;
constructor(private fb: FormBuilder) {
  this.invoices=this.fb.group({
    firstName:[''],
    lastName:[''],
    email:[''],
    mobile:[''],
    description:[''],
    district:[''],
    state:[''],
    address1:[''],
    address2:[''],
    company:[''],
    model:[''],
    price:[''],
    make:[''],
    owner:[''],
    rc:[''],
    payment:[''],
  })
}
date = new Date();

onSubmit(){
  const formData = this.invoices.value;
  const userData = localStorage?.getItem('custmors')
  let existingData:any[]=[];

  console.log('Form Data:', formData);
  this.submittedData = formData;
  this.invoices.reset()
  alert("Form submitted successfully")
  this.showInvoice.set(true)
    existingData=userData? JSON.parse(userData):[]
  existingData.push(formData)
  localStorage.setItem('custmors' , JSON.stringify(existingData))
 
}

printInvoice() {
  const printContents = this.invoiceSection.nativeElement.innerHTML;
  const originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;

  window.location.reload();
}
}


