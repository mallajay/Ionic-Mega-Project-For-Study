import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RxjsVsEventApiService {
  private count = new BehaviorSubject(0);

  constructor() {}

  increseProduct() {
    const newVal = this.count.getValue() + 1;
    this.count.next(newVal);
  }

  decreasProduct() {
    const newVal = this.count.getValue() - 1;
    this.count.next(newVal);
  }

  getCountObeservale(): Observable<number> {
    return this.count.asObservable();
  }
}
