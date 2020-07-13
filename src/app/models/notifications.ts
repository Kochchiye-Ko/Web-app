import { Timestamp } from 'rxjs/internal/operators/timestamp';

export interface Notification {
    id?: String;
    author?: String;
    dateTime?: Date;
    message?: String;
    subject?: String;
}