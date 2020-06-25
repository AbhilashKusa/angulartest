import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarsData } from './cardata';
import { map } from 'rxjs/operators';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  AngularFirestoreCollectionGroup,
} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root',
})
export class ItemService {
  CarsCollection: AngularFirestoreCollection<CarsData>;
  Cars: Observable<CarsData[]>;
  constructor(public data: AngularFirestore) {
    this.Cars = this.data.collection('car').valueChanges();
  }
  getItems() {
    return this.Cars;
  }
}
