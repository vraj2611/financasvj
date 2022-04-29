import { Carteira } from './carteira';
import { Entidade } from './entidade';
import { Evento } from './evento';

export class Operacao extends Entidade {
  readonly carteira: Carteira;
  readonly evento: Evento;
  readonly data: Date;
  readonly valor: number;
  readonly tipogasto: TipoGasto;
  readonly tiporeceita: TipoReceita;
  readonly destino: Carteira;
}
