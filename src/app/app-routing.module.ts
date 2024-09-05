import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedHomePageComponent } from './logged-home-page/logged-home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LoggedHomePageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
