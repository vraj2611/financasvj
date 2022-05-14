import { Component, OnInit } from '@angular/core';

export interface itemmenu {
  texto: string,
  icone: string,
  rota: string
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  itens: itemmenu[]
  constructor() {
    this.itens = [
      { texto: "Dashboard", icone: "dashboard", rota: "dashboard" },
      { texto: "Carteiras", icone: "wallet", rota: "dashboard" },
      { texto: "Tipos de Gasto", icone: "shopping_bag", rota: "dashboard" },
      { texto: "Tipos de Receita", icone: "savings", rota: "dashboard" },
      { texto: "Eventos", icone: "loyalty", rota: "dashboard" },
      { texto: "Planejamento", icone: "monitoring", rota: "dashboard" },
    ]
  }

}
