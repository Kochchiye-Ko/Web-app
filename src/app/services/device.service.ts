import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Device } from '../models/device';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  devicelist: Observable<Device[]>

  constructor(public afs: AngularFirestore) {
    this.devicelist = this.afs.collection('Devices').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data2 = a.payload.doc.data() as Device;
        data2.id = a.payload.doc.id;
        return data2;
      });
    }));
  }

  firequery(start, end) {
    return this.afs.collection('Devices', ref => ref.orderBy("deviceid").startAt(start).endAt(end)).valueChanges();
  }

  adddevice(data: Device) {
    this.afs.collection(`Devices`).add(data);
  }
}

