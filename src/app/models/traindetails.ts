import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { Time } from '@angular/common';

export interface TrainDetails {
    id?: String;
    dailyOrweekend?: string;
    endStaion?: string;
    endTime?: Timestamp<Time>;
    startStaion?: string;
    startTime?: Timestamp<Time>;
    trainName?: string;
    trainNumber?: string;
    trainType?: string;
}
