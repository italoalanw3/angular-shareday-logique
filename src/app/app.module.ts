import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { MinhasDiretivasComponent } from './minhas-diretivas/minhas-diretivas.component';
import { BindingEInterpolationComponent } from './binding-e-interpolation/binding-e-interpolation.component';
import { InjecaoDependenciaComponent } from './injecao-dependencia/injecao-dependencia.component';
import { MelhorTimeService } from './injecao-dependencia/melhor-time.service';
import { PipesComponent } from './pipes/pipes.component';
import { HttpRequestComponent } from './http-request/http-request.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    MinhasDiretivasComponent,
    BindingEInterpolationComponent,
    InjecaoDependenciaComponent,
    PipesComponent,
    HttpRequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MelhorTimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
