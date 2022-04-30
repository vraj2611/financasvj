import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposgastosComponent } from './tiposgastos.component';

describe('TiposgastosComponent', () => {
  let component: TiposgastosComponent;
  let fixture: ComponentFixture<TiposgastosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposgastosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposgastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
