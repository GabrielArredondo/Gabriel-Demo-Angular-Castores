import { OnInit } from '@angular/core';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ListaProductoService } from 'src/app/services/lista-producto.service';
import { PeriodicElement } from '../comprar/comprar.component';

export interface   Transaction  {
calidad: string,
cantidad: string,
capacidad: string,
color: string,
fecha: string,
id: string,
liquidacion: string,
material: string,
modelo: string
}

@Component({
  selector: 'app-taza-lista',
  templateUrl: './taza-lista.component.html',
  styleUrls: ['./taza-lista.component.scss']
})
export class TazaListaComponent implements OnInit, AfterViewInit  {
  ELEMENT_DATA : Transaction[]=[];
  displayedColumns: string[] = ['color', 'capacidad', 'modelo', 'material','calidad','cantidad','precio','opciones'];
  dataSource = new MatTableDataSource<Transaction>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private service:ListaProductoService) { }
  ngAfterViewInit(): void {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
    this.getAllReports();
  }
  eliminar(id){
    this.service.deleteTaza(id).subscribe((data:any)=>{
      this.ngOnInit();
    })
  }

  public getAllReports(){
    let resp = this.service.getTaza();
    resp.subscribe(report=>this.dataSource.data=report  as Transaction[])
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}




