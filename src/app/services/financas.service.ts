import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FinancasService {
  constructor() {}

  public getCarteira(): string {
    return 'abcdef';
  }
}
