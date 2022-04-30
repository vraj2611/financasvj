import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteirasComponent } from './carteiras.component';

describe('CarteirasComponent', () => {
  let component: CarteirasComponent;
  let fixture: ComponentFixture<CarteirasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteirasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteirasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
