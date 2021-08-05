import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TazaListaComponent } from './taza-lista.component';

describe('TazaListaComponent', () => {
  let component: TazaListaComponent;
  let fixture: ComponentFixture<TazaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TazaListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TazaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
