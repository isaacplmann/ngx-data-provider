import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export interface ProviderMap {
  [key: string]: Subject<any>;
}

@Injectable({
  providedIn: 'root'
})
export class NgxDataProviderService {
  providers: ProviderMap = {};

  setProvider(key: string, data: any) {
    if (!this.providers[key]) {
      this.providers[key] = new BehaviorSubject(data);
    } else {
      this.providers[key].next(data);
    }
  }
}
