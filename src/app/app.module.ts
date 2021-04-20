import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './Modules/app-routing.module';
import { AppComponent } from './Components/app.component';
import { PokemonsComponent } from './Components/pokemons/pokemons.component';
import { MenuComponent } from './Components/menu/menu.component';
import { HomeComponent } from './Components/home/home.component';
import { PokeDetailsComponent } from './Components/poke-details/poke-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';
 
@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    MenuComponent,
    HomeComponent,
    PokeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
