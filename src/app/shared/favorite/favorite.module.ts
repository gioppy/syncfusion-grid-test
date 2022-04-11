import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteComponent } from './favorite.component';



@NgModule({
  declarations: [
    FavoriteComponent
  ],
  exports: [
    FavoriteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FavoriteModule { }
