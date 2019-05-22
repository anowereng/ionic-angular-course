import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  {
    path: 'recipes', children: [
    { path: '', loadChildren: './receipes/receipes.module#ReceipesPageModule' },
    { path: ':recipeId', loadChildren: './receipes/receipes-detail.module#ReceipesDetailPageModule'},
      { path: 'detail', loadChildren: './receipes/detail/detail.module#DetailPageModule' }
  ]
}
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
