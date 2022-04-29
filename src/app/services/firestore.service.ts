import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, pipe, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private afs: AngularFirestore) {}

  public getCarteiras(): Observable<any[]> {
    return this.afs
      .collection('usuarios/L0upEgeHGNhYAOeSjDwT/carteiras')
      .valueChanges({ idField: 'uid' })
      .pipe(
        tap((d) => {
          console.log(d);
        })
      );
  }
}
