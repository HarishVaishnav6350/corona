import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { DynamicRoutingComponent } from '../dynamic-routing/dynamic-routing.component';
import { EncoderPipe } from '../../pipe/encoder.pipe';

@Component({
  selector: 'app-angular-mastry',
  templateUrl: './angular-mastry.component.html',
  styleUrls: ['./angular-mastry.component.css'],
  imports:[CommonModule,FormsModule,SearchBarComponent,RouterLink,RouterModule,DynamicRoutingComponent,EncoderPipe]
})
export class AngularMastryComponent implements OnInit {
  searchTerm: string = '';
  masteryPlan:any[]=[];
  filteredMasteryPlan: any[] = [];

  constructor(private http : HttpClient,private route:Router) {
    
   }

  ngOnInit(): void { 
   this.http.get<any[]>('assets/mastry.json').subscribe({
 next:(res)=>{
  this.masteryPlan=res;
  this.filteredMasteryPlan = res;
  console.log(res)
 },
 error:(err)=>{
  console.log('error from mastry',err)

 }

   })
  }


  filteredPlan(search:any) {
    if (!search.trim()) {
      console.log(  '1st' ,search)
      
      return this.masteryPlan ;
    }

    const term = search.toLowerCase();
    console.log( '2nd' ,search)

    return this.filteredMasteryPlan= this.masteryPlan.filter(item =>
      item.day.toLowerCase().includes(term) ||
      item.topic.toLowerCase().includes(term) ||
      item.subtopics.some((sub: string) => sub.toLowerCase().includes(term))
      
    
    )
  }

  toggleCompletion(topic:any) {
    topic.completed = !topic.completed;
  }
  navigateToDetails(item: any) {
    this.route.navigate(['/mastry', item.id], {
      state: { userData: item }
    });
  }


  encodeData(data: any): string {
    return encodeURIComponent(JSON.stringify(data));
  }
  
}