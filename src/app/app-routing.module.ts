import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import {VisioComponent} from './component/visio/visio.component';
import {RoomComponent} from './component/room/room.component';
import {ProfileComponent} from './component/profile/profile.component';
import {StatistiqueComponent} from './component/statistique/statistique.component';
import {NotificationsComponent} from './component/notifications/notifications.component';
import {FormationComponent} from './component/formation/formation.component';
import {ChapitreComponent} from './component/chapitre/chapitre.component';
import {ImageComponent} from './component/image/image.component';
import {VideoComponent} from './component/video/video.component';
import {MessageComponent} from './component/message/message.component';
import {MsgComponent} from "./component/msg/msg.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path:'home', component:HomeComponent, children:[
  {
    path: 'visio/:id',
    component: VisioComponent,
  },

  {
    path: 'room',
    component: RoomComponent,
  },
      {
    path: 'profile',
    component: ProfileComponent,
  },

      {
        path: 'formation',
        component: FormationComponent,
      },
      {
        path:'notif',
        component:NotificationsComponent
      },
      {
        path:'chapitre/:id',
        component:ChapitreComponent
      },

      {
        path:'img/:fic',
        component:ImageComponent
      },
      {
        path:'vid/:fic',
        component:VideoComponent
      },
      {
    path: 'stat',
    component: StatistiqueComponent,
  },
      {
        path: 'msg',
        component: MessageComponent,
      },
      {
        path: 'msgd/:id',
        component: MsgComponent,
      },

    ],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
