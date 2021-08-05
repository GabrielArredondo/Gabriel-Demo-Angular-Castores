import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TazaVentaComponent } from './taza-venta.component';

describe('TazaVentaComponent', () => {
  let component: TazaVentaComponent;
  let fixture: ComponentFixture<TazaVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TazaVentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TazaVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
