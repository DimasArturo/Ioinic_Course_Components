import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
  standalone: false
})
export class InputPage implements OnInit {

  nombre: string = 'Dimas';
  usuario = {
    email: '',
    password: ''  
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formulario: NgForm){
    console.log('submit');
    console.log(this.usuario);
    console.log(formulario);
  }

}
