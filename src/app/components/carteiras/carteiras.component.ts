import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Carteira } from 'src/app/models/carteira';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-carteiras',
  templateUrl: './carteiras.component.html',
  styleUrls: ['./carteiras.component.scss']
})
export class CarteirasComponent {
  items: Observable<any[]>;
  teste: string;
  novonome: string;
  nomeatual:string;
  escolhida:Carteira;
  idatual:string;
  constructor(private serv:FirestoreService) {
    this.items = this.serv.getCarteiras();
  }

  addCarteira(){
    let c = new Carteira(this.novonome, "qweqrqre")
    this.serv.addCarteira(c)
  }

  escolher(id:string, nome:string){
    this.idatual = id;
    this.nomeatual = nome;
  }

  update(){
    this.serv.renomear(this.idatual, this.nomeatual)
  }
}
