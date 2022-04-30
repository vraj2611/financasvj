export class Entidade {
  public nome: string;
  readonly id: string;
  public ativo: boolean;

  constructor(nome:string, id:string, ativo:boolean = true){
    this.nome = nome;
    this.id = id;
    this.ativo = ativo;
  }
}
