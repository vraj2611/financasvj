import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, pipe, tap } from 'rxjs';
import { Carteira } from '../models/carteira';
import { Evento } from '../models/evento';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {

  private loggedUser:string;
  constructor(private afs: AngularFirestore) {}

  public getCarteiras(): Observable<Carteira[]> {
    return this.afs
      .collection<Carteira>('usuarios/L0upEgeHGNhYAOeSjDwT/carteiras')
      .valueChanges({ idField: 'id' });
  }

  public addCarteira(carteira:Carteira){
    console.log(carteira)
    this.afs.collection<Carteira>('usuarios/L0upEgeHGNhYAOeSjDwT/carteiras').add(Object.assign({}, carteira));
  }

  public renomear(id:string, novonome:string){
    let cart = new Carteira( novonome, id);
    this.afs.doc('usuarios/L0upEgeHGNhYAOeSjDwT/carteiras/' + cart.id).update(Object.assign({}, cart))
  }
  
}
