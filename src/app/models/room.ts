export class Room  {



  name!: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  service_id!: '';
  settings!: {
    description: '';
    mode: '';
    scheduled: true;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    scheduled_time: '';
    adhoc: false;
    duration: '';
    participants: '';
    // eslint-disable-next-line @typescript-eslint/naming-convention
    auto_recording: false;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    screen_share: true;
    canvas: false;
    abwd: true;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    media_configuration: '';
    quality: '';
    moderators: '';
    viewers: 0;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    active_talker: true;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    max_active_talkers: 16;
    encryption: false;
    watermark: false;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    single_file_recording: false;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    media_zone: '';
  };
  sip!: {
    'enabled': false;
  };
  created!: '';
  // eslint-disable-next-line @typescript-eslint/naming-convention
  room_id!: '';



}


