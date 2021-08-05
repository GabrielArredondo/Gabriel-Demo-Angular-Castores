import { AfterViewInit } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ListaProductoService } from 'src/app/services/lista-producto.service';
import Swal from 'sweetalert2';
export interface PeriodicElement {
  color: string;
  capacidad: string;
  modelo: string;
  material:string;
  calidad:string;
  cantidad:string;
  precio:string,
  opciones:string
}



/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.scss']
})
export class ComprarComponent implements OnInit, AfterViewInit  {
   ELEMENT_DATA: PeriodicElement[] = [];
   productos=0;
   items=[];
  constructor(){
    if(JSON.parse(localStorage.getItem('carrito'))){
      this.productos=JSON.parse(localStorage.getItem('carrito')).length;
      JSON.parse(localStorage.getItem('carrito')).forEach(element => {
        this.ELEMENT_DATA.push(element);
      });
    }
    this.items = [
      { Active: true, MenuText: "Productos", MenuIcon: "shopping_cart" }
    ];

  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  displayedColumns: string[] = ['color', 'capacidad', 'modelo', 'material','calidad','cantidad','precio','opciones'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  comprar(){
    if( this.ELEMENT_DATA.length>0){
     for(let i=0; i<this.ELEMENT_DATA.length; i++){
      if(this.ELEMENT_DATA[i].calidad=="Alta" || this.ELEMENT_DATA[i].calidad=="alta"){
        if(this.ELEMENT_DATA[i].cantidad >='10'){
          let cant = this.ELEMENT_DATA[i].cantidad + 2;
          Swal.fire({
            title: '<strong>HTML <u>Pedido</u></strong>',
            html:'<h6> Color: '+this.ELEMENT_DATA[i].color+'</h6> '+
            '<h6> Modelo: '+this.ELEMENT_DATA[i].modelo+'</h6>  '+
            '<h6> Cantidad: '+cant+'</h6>'+' '+
            '<h6> Precio: '+this.ELEMENT_DATA[i].precio+'</h6>'+' '+
            '<h6>Taza regalo:  '+2+' de baja calidad</h6>'+'<br>',

          });
        }else{
          Swal.fire({
            title: '<strong>HTML <u>Pedido</u></strong>',
            html:'<h6> Color: '+this.ELEMENT_DATA[i].color+'</h6>'+' '+
            '<h6> Modelo: '+this.ELEMENT_DATA[i].modelo+'</h6>'+' '+
            '<h6>Cantidad: '+this.ELEMENT_DATA[i].cantidad+'</h6>'+' '+
            '<h6>Precio: '+this.ELEMENT_DATA[i].precio+'</h6>'+'<br>',

          });
        }
      }
     }
        
      
    }
  }
}



