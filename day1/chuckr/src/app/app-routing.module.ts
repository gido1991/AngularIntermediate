import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokeCardComponent } from './joke-details/joke-card/joke-card.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // 1 default routing example
  // {path: 'details', component: JokeCardComponent }

  // 2 home page
  { path: '', component: HomeComponent },

  // 3 loadChildren example (lazy loading)
  { path: 'details', loadChildren: () => import('./joke-details/joke-details.module').then(m => m.JokeDetailsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
