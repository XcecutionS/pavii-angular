import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuComponent } from './menu/menu.component';
import { ArticulosListaComponent } from './articulos-lista/articulos-lista.component';
import { RouterModule } from '@angular/router';
import { ArticulosCargaComponent } from './articulos-carga/articulos-carga.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    {path: 'listaarticulos/:id', component: ArticulosListaComponent},
    {path: 'cargaarticulos', component: ArticulosCargaComponent},
    {path: 'principal', component: AppComponent},
    {path: '', component: AppComponent},
  ]) ],
  declarations: [ AppComponent, HelloComponent, MenuComponent, ArticulosListaComponent, ArticulosCargaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
