import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, pipe, tap } from 'rxjs';
import { FirestoreService } from "./services/firestore.service"

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  items: Observable<any[]>;
  teste: string;
  constructor(private zz:FirestoreService) {
    this.items = this.zz.getCarteiras();
  }
}
