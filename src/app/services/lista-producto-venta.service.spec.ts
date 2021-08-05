import { TestBed } from '@angular/core/testing';

import { ListaProductoVentaService } from './lista-producto-venta.service';

describe('ListaProductoVentaService', () => {
  let service: ListaProductoVentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaProductoVentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
