import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Inyección de HttpClient en el constructor
  constructor(private http: HttpClient) {}

  // Ejemplo de método para obtener datos
  getUsuarios() {
    return this.http.get('https://jsonplaceholder.typicode.com/users'); // Devuelve un observable
  }
  getMenuOpts() {
    return this.http.get <Componente[]>('/assets/data/menu.opts.json');
  }
}
