import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
  standalone: false
})
export class DateTimePage implements OnInit {

  // Fecha inicial para el selector
  fechaNaci: Date = new Date();

  // Valores personalizados para los años
  customYearValues = [2025, 2020, 2016, 2008, 2004, 2000, 1996];

  constructor() { }

  ngOnInit() {
  }

  // Función que se ejecuta al cambiar la fecha
  cambioFecha(event: any) {
    console.log(event);
    console.log(new Date(event.detail.value));
  }

  // Función para el botón "Hola"
  logHola() {
    console.log('Hola');
  }

  // Función para el botón "Mundo"
  logMundo() {
    console.log('Mundo');
  }

}
