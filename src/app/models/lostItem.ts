import { Time } from '@angular/common';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

export interface LostItems {
    id?: String;
    date?: Timestamp<Time>;
    descriptions?: String;
    itemtitle?: string;
    uid?: String;
    userphonenumber?: Number;
    state?: String;
}
