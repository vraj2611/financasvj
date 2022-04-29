import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { Observable, pipe, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor() {}

  // public getCarteiras(): Observable<{}> {
  //   return this.afs
  //     .collection('usuarios/L0upEgeHGNhYAOeSjDwT/carteiras')
  //     .valueChanges({ idField: 'uid' });
  // }

  public getCarteiras(): string {
    return 'aaaaa';
  }
}
