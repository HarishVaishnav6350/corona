import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-qury-param',
  imports: [RouterModule,CommonModule],
  templateUrl: './qury-param.component.html',
  styleUrl: './qury-param.component.css'
})
export class QuryParamComponent implements OnInit {
  activeTab: string = 'tab1';
constructor(private ac :ActivatedRoute,public route:ActivatedRoute){}

  ngOnInit(): void {
    
    this.ac.params.subscribe((param) => {
      this.activeTab = param['tab'] || 'tab2';
      console.log(param['tab']);
      console.log(this.activeTab);
    });
    

    
  }

}
