import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor() { }

  @Output()
  menu = new EventEmitter<boolean>();

  abrirMenu() {
    this.menu.emit(true);
  }


}
