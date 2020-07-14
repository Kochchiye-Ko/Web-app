import { Timestamp } from 'rxjs/internal/operators/timestamp';

export interface Notification {
    id?: String;
    author?: String;
    dateTime?: String;
    message?: String;
    subject?: String;
}