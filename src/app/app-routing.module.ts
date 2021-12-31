import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
import {WeakPageComponent} from './weak-page/weak-page.component';
import { Routes, RouterModule } from '@angular/router';


const routes : Routes = [
  
    {
      path: '',
      redirectTo: 'pokemon-list',
      pathMatch: 'full'
    },
    {
      path: 'pokemon-list',
      component: PokemonListComponent
    },
    {
      path: 'weakness',
      component: WeakPageComponent
    }
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
