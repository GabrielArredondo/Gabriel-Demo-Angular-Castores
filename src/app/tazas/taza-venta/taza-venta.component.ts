import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListaProductoService } from 'src/app/services/lista-producto.service';
import Swal from 'sweetalert2';

export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'app-taza-venta',
  templateUrl: './taza-venta.component.html',
  styleUrls: ['./taza-venta.component.scss']
})
export class TazaVentaComponent implements OnInit {
  gridColumns = 3;
  productos=0;
items=[];
baja:any=[];
alta:any=[];
textoDeInput;
compra:any=[];
firstFormGroup: FormGroup;
secondFormGroup: FormGroup;
  constructor(private taza:ListaProductoService,private fb: FormBuilder, private router: Router) {
    if(JSON.parse(localStorage.getItem('carrito'))){
      this.productos=JSON.parse(localStorage.getItem('carrito')).length;
    }
    
    this.firstFormGroup = this.fb.group({
      cantidad: ["", [Validators.required]]
    });
    this.secondFormGroup = this.fb.group({
      cantidad: ["", [Validators.required]]
    });
    this.items = [
      { Active: true, MenuText: "Productos", MenuIcon: "shopping_cart" }
    ];
  }

  ngOnInit(): void {
    this.taza.getProductos().subscribe((data:any)=>{
      const baja = data.filter(function (el) {
        return el.calidad == "baja" || el.calidad=="Baja"
      });
     this.baja= baja;
     const alta = data.filter(function (el) {
      return el.calidad == "alta" || el.calidad=="Alta"
    });
    this.alta=alta;
    })
  
 
  }
   incrementValue(){
}
carrito(taza,f){
  let tazaa = taza;
  tazaa.cantidad=f.value.cantidad;
  if(f.value.cantidad>1){
    tazaa.precio = tazaa.precio *f.value.cantidad;
  }
  this.compra.push(tazaa);
  
  this.compra.forEach(el => {
    if(el.calidad==='baja' || el.calidad==='baja'){
     if(el.cantidad>=10){
       let can = el.cantidad +2;
      Swal.fire({
        title: '<strong>HTML <u>Pedido</u></strong>',
        html:'<h6> Color: '+el.color+'</h6> '+
        '<h6> Modelo: '+el.modelo+'</h6>  '+
        '<h6> Cantidad: '+can+'</h6>'+' '+
        '<h6> Precio: '+el.precio+'</h6>'+' '+
        '<h6>Taza regalo:  '+2+' de baja calidad</h6>'+'<br>',

      });
     }else{
      Swal.fire({
        title: '<strong>HTML <u>Pedido</u></strong>',
        html:'<h6> Color: '+el.color+'</h6>'+' '+
        '<h6> Modelo: '+el.modelo+'</h6>'+' '+
        '<h6>Cantidad: '+el.cantidad+'</h6>'+' '+
        '<h6>Precio: '+el.precio+'</h6>'+'<br>',

      });
     }
    }
  });
      
  
}
  
  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

}
