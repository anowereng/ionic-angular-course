import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'receipes', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'receipes',
  children: [
    { path: '',loadChildren: './receipes/receipes.module#ReceipesPageModule'},
     { path: ':recipeId', loadChildren: './ receipes/receipes.detail#ReceipesDetailPageModule'}
  ]
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
