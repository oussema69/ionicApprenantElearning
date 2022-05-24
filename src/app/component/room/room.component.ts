import {Component, Inject, LOCALE_ID, OnInit, ViewChild} from '@angular/core';
import jwt_decode from 'jwt-decode';
import {VisioService} from '../../services/visio.service';
import {Room} from '../../models/room';
import {Router} from '@angular/router';
import {CalendarComponent} from 'ionic2-calendar';
import {AlertController, ModalController} from '@ionic/angular';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  app: any;
  allRooms: any;
  room: Room[] = [];
  eventSource = [];
  viewTitle: string;
buttons: HTMLButtonElement;
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  selectedDate: Date;

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(private service: VisioService, private router: Router, private alertCtrl: AlertController,
              @Inject(LOCALE_ID) private locale: string,
              private modalCtrl: ModalController) {
  }

  async ngOnInit() {

this.roomadd();
  }
  roomadd(): any{
    const token = localStorage.getItem('mhatlioussema');
    if (token) {
      const decoded = jwt_decode(token);
      this.app = decoded;
      this.allRooms = this.app.data.idR;
      const events= [];
      for (const i of this.allRooms) {
        this.service.getRoomById(i, this.room).subscribe(
          res => {
            this.room.push(res.room);
//add events

            const date = new Date(res.room.settings.scheduled_time);

            let startTime;
            let endTime;
              startTime = new Date(
                Date.UTC(
                  date.getUTCFullYear(),
                  date.getUTCMonth(),
                  date.getUTCDate(),
                  date.getHours() - 1,
                  date.getMinutes()
                )
              );
              endTime = new Date(
                Date.UTC(
                  date.getUTCFullYear(),
                  date.getUTCMonth(),
                  date.getUTCDate(),
                  date.getHours(),
                  date.getMinutes()
                )
              );
              events.push({
                title: res.room.name,
                startTime,
                endTime,
                duration: res.room.settings.duration,
                id: res.room.room_id,
                allDay: true,
              });
            this.myCal.loadEvents();

          }

        );
      }
      this.eventSource = events;


    }
  }

  go(id: string) {
    this.router.navigate(['home/visio/' + id]);
  }
//--------------------------
  next() {
    this.myCal.slideNext();
    this.roomadd();
  }

  back() {
    this.myCal.slidePrev();
    this.roomadd();
  }

  // Selected date reange and hence title changed
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
  //jbjkbjkbkjbkjbjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
  async onEventSelected(event) {
    // Use Angular date pipe for conversion
    const start = formatDate(event.startTime, 'medium', this.locale);
    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.desc,
      message: 'De: ' + start + '<br><br>Dureé: ' + event.duration+'min'   ,
      buttons: [{text:'rejoindre',handler:()=>{
          this.router.navigate(['home/visio/' + event.id]);

        }},{text:'annuler',handler:()=>{
        }}
      ],
    });
    alert.present();
    this.roomadd();

  }
  removeEvents() {
    this.eventSource = [];
  }


}
