import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LegalesComponent } from './legales/legales.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'mentions-legales', component: LegalesComponent },
  // { path: 'realisation', component:  },
  // { path: 'blog', component: BlogComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
