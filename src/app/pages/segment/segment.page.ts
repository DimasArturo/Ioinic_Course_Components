import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
  standalone: false
})
export class SegmentPage implements OnInit {

  superHeroes!: Observable<any>;
  publisher: string = ''

  constructor(private dataService:DataService){ }


  ngOnInit() {
    this.superHeroes = this.dataService.getHeroes();
  }

  segmentChanged(event: any): void {
    // console.log(event.detail.value);
  
    // if (event.detail.value === 'todos') {
    //   this.publisher = '';
    // } else {
      this.publisher = event.detail.value;
    // }
  }
}  
