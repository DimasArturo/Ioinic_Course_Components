import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { StatusBar } from '@capacitor/status-bar';

StatusBar.setOverlaysWebView({ overlay: false }); // Asegúrate de que se superponga


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
