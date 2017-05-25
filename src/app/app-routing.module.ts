import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StickersComponent } from './stickers/stickers.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'stickers'
  },
  {
    path: 'stickers',
    component: StickersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
