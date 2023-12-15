import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LegalesComponent } from './legales/legales.component';
import { NavComponent } from './nav/nav.component';
import { ProjetComponent } from './projet/projet.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LegalesComponent,
    NavComponent,
    ProjetComponent,
    FooterComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
