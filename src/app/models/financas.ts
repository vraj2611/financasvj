import { Carteira } from "./carteira";
import { Evento } from "./evento";
import { Operacao } from "./operacao";
import { Previsao } from "./previsao";

export class Financas {

  private carteiras:Carteira[];
  private eventos:Evento[];
  private operacoes:Operacao[];
  private previsoes:Previsao[];

  conctructor(){
    this.carteiras = [];
  }


  public addCarteiras(carts:Carteira[]){
    this.carteiras.concat(carts);
  }


}

