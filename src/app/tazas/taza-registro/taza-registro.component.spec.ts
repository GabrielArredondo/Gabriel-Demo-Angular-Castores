import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TazaRegistroComponent } from './taza-registro.component';

describe('TazaRegistroComponent', () => {
  let component: TazaRegistroComponent;
  let fixture: ComponentFixture<TazaRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TazaRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TazaRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
