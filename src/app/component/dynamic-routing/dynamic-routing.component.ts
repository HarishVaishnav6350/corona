import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PiChartComponent } from '../pi-chart/pi-chart.component';
import { EncoderPipe } from '../../pipe/encoder.pipe';

@Component({
  selector: 'app-dynamic-routing',
  imports: [CommonModule,PiChartComponent,RouterLink],
  templateUrl: './dynamic-routing.component.html',
  styleUrl: './dynamic-routing.component.css'
})
export class DynamicRoutingComponent implements OnInit {
  id: number = 0;  // Default value
  itemData: any;

  constructor(private route: ActivatedRoute,private encoderPipe:EncoderPipe ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    // if (idParam) {
    //   this.id = +idParam;
    // }

    this.route.queryParams.subscribe(params => {
      const data = params['data'];
      this.itemData=this.encoderPipe.transform(data,'decode')
      console.log(this.itemData)
    });
  }
}

