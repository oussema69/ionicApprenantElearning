import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './component/login/login.component';
import {HomeComponent} from './component/home/home.component';
import {RoomComponent} from './component/room/room.component';
import {PipesModule} from 'pipes-module';
import {CommonModule} from '@angular/common';
import { SecurityPipe } from './pipes/security.pipe';
import {NavbarComponent} from './component/navbar/navbar.component';
import {NgCalendarModule} from 'ionic2-calendar';
import {HeadersComponent} from './component/headers/headers.component';

@NgModule({
  declarations: [AppComponent,LoginComponent,HomeComponent,RoomComponent, SecurityPipe,NavbarComponent ,HeadersComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    PipesModule,
    NgCalendarModule,

  ],


  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy, }],
  bootstrap: [AppComponent],
})
export class AppModule {}
