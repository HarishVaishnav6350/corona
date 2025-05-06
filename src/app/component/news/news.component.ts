import { Component,OnInit, signal } from '@angular/core';
import { DataService } from '../../data.service';
import { CommonModule } from '@angular/common';
import {
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-news',
  imports: [CommonModule,SearchBarComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
  animations: [
    trigger('fadeSlideIn', [
      transition(':enter', [
        style({ opacity: 5, transform: 'translateY(60px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})

export class NewsComponent implements OnInit {
  data: any;
  newsArticles: any;
  nor:any;
  fakeArray = Array(100); 
  constructor(private news:DataService) { }
  

  ngOnInit() {
     
      this.news.fetchData().subscribe(response => {
        this.data = response;
        this.nor = this.data.articles; 
        console.log(this.nor);  
      });
     
  }
  
  window(prop: string): void {
    const features = [
      'popup',
      'width=400',
      'height=400',
      'left=1000',
      'top=100',
      'status=no',
      'menubar=no',
      'toolbar=no',
      'location=no',
      'resizable=yes',
      'scrollbars=yes' // optional, if you need scroll
    ].join(',');
  
    const popupWindow = window.open(
      prop,        // URL or route to open
      'popupWindow',
      features
    );
  
    // Optional: Focus the window
    if (popupWindow) {
      popupWindow.focus();
    }
  }
  
  handleImgError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = 'assets/image/giphy.gif'; // fallback image path
  }
  

}
