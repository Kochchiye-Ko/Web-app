import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { DatePipe } from '@angular/common';

export interface Users {
    firstname?: String;
    lastname?: String;
    email?: String;
    phoneno?: String;
    id?: String;
    // dateTime?: DatePipe;
}