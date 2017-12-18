import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

// services
import { CargaImagenesService } from './services/carga-imagenes.service';

import { AppComponent } from './app.component';
import { CargaComponent } from './components/carga/carga.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { APP_ROUTING} from './app.routes';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';
// import { NgDropFilesDirective } from './directives/ng-drop-files.directive';


@NgModule({
  declarations: [
    AppComponent,
    CargaComponent,
    FotosComponent,
    NavbarComponent,
    NgDropFilesDirective,
    // NgDropFilesDirective
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(environment.firebase ),
    AngularFireDatabaseModule
  ],
  providers: [CargaImagenesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
