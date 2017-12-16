import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { CargaComponent } from './components/carga/carga.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { APP_ROUTING} from './app.routes';
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
    APP_ROUTING,
    AngularFireModule.initializeApp(environment.firebase )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
