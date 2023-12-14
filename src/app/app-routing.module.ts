import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LegalesComponent } from './legales/legales.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'legales', component: LegalesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
