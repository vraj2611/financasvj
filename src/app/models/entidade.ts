export class Entidade {
  public nome: string;
  readonly uid: string;
  public ativo: boolean;

  constructor(nome:string, uid:string){
    this.nome = nome;
    this.uid = uid;
    this.ativo = true;
  }
}
