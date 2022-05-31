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
import {NotificationsComponent} from './component/notifications/notifications.component';
import {ProfileComponent} from './component/profile/profile.component';
import {FormationComponent} from './component/formation/formation.component';
import {ChapitreComponent} from './component/chapitre/chapitre.component';
import {RessourceComponent} from './component/ressource/ressource.component';
import { FormationPipe } from './pipes/formation.pipe';
import { ChapitrePipe } from './pipes/chapitre.pipe';
import {FileOpener} from '@ionic-native/file-opener/ngx';
import {ImageComponent} from './component/image/image.component';
import {VideoComponent} from './component/video/video.component';
import {StatistiqueComponent} from "./component/statistique/statistique.component";
@NgModule({
  declarations: [AppComponent,LoginComponent,HomeComponent,RoomComponent, SecurityPipe,NavbarComponent ,HeadersComponent,NotificationsComponent,ProfileComponent,FormationComponent,
  ChapitreComponent,RessourceComponent, FormationPipe, ChapitrePipe,ImageComponent,VideoComponent,StatistiqueComponent],
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


  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy, },FileOpener,],
  bootstrap: [AppComponent],
})
export class AppModule {}
