import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data.service';
import { Platform } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
  

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false
})
export class AppComponent {
  componentes!: Observable<Componente[]>;

  constructor(
    private platform: Platform, // Inyecta Platform de Ionic
    private dataService: DataService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    // Usa el método ready() del servicio Platform
    this.platform.ready().then(() => {
      this.componentes = this.dataService.getMenuOpts();
    });
  }
}
