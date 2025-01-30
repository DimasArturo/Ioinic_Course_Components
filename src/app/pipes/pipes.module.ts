import { NgModule } from '@angular/core';
import { FiltroPipe } from './filtro.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FiltroPipe
  ],
  exports: [
    FiltroPipe
  ]
})
export class PipesModule { }
