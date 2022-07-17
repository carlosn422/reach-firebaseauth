import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  constructor() { }
  private subjectAccion1 = new Subject<any>();

    private subjectAccion2 = new Subject<any>();

    hazAccion1(message: string, number: number) {
        this.subjectAccion1.next({ text: message, scroll: number });
    }

    hazAccion2(message: string) {
        this.subjectAccion2.next({ text: message });
    }

    escucharAccion1(): Observable<any> {
        return this.subjectAccion1.asObservable();
    }

    escucharAccion2(): Observable<any> {
        return this.subjectAccion2.asObservable();
    }
}
