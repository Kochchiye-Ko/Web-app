import { Timestamp } from 'rxjs/internal/operators/timestamp';

export interface Notification {
    id?: String;
    author?: String;
    //dateTime?: Timestamp<1>;
    message?: String;
    subject?: String;
}