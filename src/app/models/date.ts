import { Inject,LOCALE_ID,Pipe,PipeTransform} from "@angular/core";
import { formatDate } from "@angular/common";
import { firestore } from "firebase/app";
import Timestamp = firestore.Timestamp;

@Pipe({
    name: 'firestoreDate'
  })
  export class FirestoreDatePipe implements PipeTransform {
  
    constructor(@Inject(LOCALE_ID) private dateTime: string) {
    }
  
    transform(timestamp: Timestamp, format?: string): string {
        if (!timestamp || !timestamp.toDate) {
            return;
        }
        return formatDate(timestamp.toDate(), format || 'medium', this.dateTime);
    }
  }