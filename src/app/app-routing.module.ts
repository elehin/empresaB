import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InitialComponent } from './initial/initial.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'initial', component: InitialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
