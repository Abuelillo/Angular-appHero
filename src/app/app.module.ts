import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LOCALE_ID} from '@angular/core'; //set idioma
import { registerLocaleData } from '@angular/common';//set idioma
import localEs from '@angular/common/locales/es';//set idioma
import localFa from '@angular/common/locales/fa';//set idioma
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';
registerLocaleData(localEs);//set idioma
registerLocaleData(localFa);//set idioma
//Rutas
import { APP_ROUTING } from './app.routes';

//servicios
import { HeroesService } from "./servicios/heroes.service";
//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BuscadorComponent } from './components/shared/buscador/buscador.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe/heroe.component';
import { TarjetaComponent } from './components/heroes/heroe/tarjeta/tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent,
    TarjetaComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  //servicios
  providers: [HeroesService,{provide:LOCALE_ID,useValue:'es'}],//set idioma],
  bootstrap: [AppComponent]
})
export class AppModule { }
