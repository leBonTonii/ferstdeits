import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
//Component creat amb ng generate component users
import { UsersComponent } from './users/users.component';
//Servei per interactuar amb la API d'usuaris
import { UsersService } from './users.service';

//Definim les routes de la nostra app
const ROUTES = [
//Si es visita el root redireccionar a /users --CANVIAR EN UN FUTUR PER EL LOGIN BLABLABLA
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsersComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
