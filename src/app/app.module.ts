import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { CargaComponent } from './components/carga/carga.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { app_routing } from './app.routes';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CargaComponent,
    FotosComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
