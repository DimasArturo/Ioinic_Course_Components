import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: false
})
export class ListPage implements OnInit {

  usuarios: Observable<any> | undefined;

  @ViewChild('IonList') ionList!: IonList;

  constructor(private dataService: DataService) { }

  ngOnInit() {

this.usuarios = this.dataService.getUsuarios();
  }

  favorite (user: any) {
    console.log('Favorite', user);
    this.ionList.closeSlidingItems();
  }
  share (user: any) {
    console.log('Share', user);
    this.ionList.closeSlidingItems();
  }
  delete (user: any) {
    console.log('Delete', user);
    this.ionList.closeSlidingItems();
  }

}
