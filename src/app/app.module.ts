import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './MyComponents/main/main.component';
import { MyMaterialModule } from './mymaterial.module';
import { MatTableModule } from '@angular/material/table';

import { CharacterListComponent } from './MyComponents/main/characters/characters.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './MyComponents/main/form/form.component';
import { HomeComponent } from './MyComponents/main/home/home.component';
import { RodzicComponent } from './MyComponents/main/rodzic/rodzic.component';
import { DzieckoComponent } from './MyComponents/main/rodzic/dziecko.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CharacterListComponent,
    FormComponent,
    HomeComponent,
    RodzicComponent,
    DzieckoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
