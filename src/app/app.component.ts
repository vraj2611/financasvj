import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, pipe, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  items: Observable<any[]>;
  teste: string;
  constructor(private afs: AngularFirestore) {
    this.items = afs
      .collection('usuarios/L0upEgeHGNhYAOeSjDwT/carteiras')
      .valueChanges({ idField: 'uid' })
      .pipe(
        tap((d) => {
          console.log(d);
        })
      );

    this.teste = 'DDDD';
  }
}
