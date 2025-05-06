import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-airsme-invoice',
  imports: [],
  templateUrl: './airsme-invoice.component.html',
  styleUrl: './airsme-invoice.component.css'
})
export class AirsmeInvoiceComponent {
  @ViewChild('invoice') invoiceElement!:ElementRef;

  printWindow() {

  
  }

}
