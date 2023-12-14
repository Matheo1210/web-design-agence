import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LegalesComponent } from './legales/legales.component';
import { NavComponent } from './nav/nav.component';
import { ProjetComponent } from './projet/projet.component';

@NgModule({
  declarations: [
    AppComponent,
    LegalesComponent,
    NavComponent,
    ProjetComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, RouterModule.forRoot([])],
  bootstrap: [AppComponent],
})
export class AppModule {}
