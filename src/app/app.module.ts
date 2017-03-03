import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { MinhasDiretivasComponent } from './minhas-diretivas/minhas-diretivas.component';
import { BindingEInterpolationComponent } from './binding-e-interpolation/binding-e-interpolation.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    MinhasDiretivasComponent,
    BindingEInterpolationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
