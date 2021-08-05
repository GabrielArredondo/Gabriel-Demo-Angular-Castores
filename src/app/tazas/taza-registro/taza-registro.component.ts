import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { ListaProductoService } from 'src/app/services/lista-producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-taza-registro',
  templateUrl: './taza-registro.component.html',
  styleUrls: ['./taza-registro.component.scss']
})
export class TazaRegistroComponent implements OnInit {
  firstFormGroup: FormGroup;
  date : any;

  constructor(private fb: FormBuilder, private service: ListaProductoService, private router: Router, private ruta:ActivatedRoute) {
    console.log();
    const id= this.ruta.snapshot.paramMap.get('id');
    if(id){
      this.actualizar(id);
    }
    this.firstFormGroup = this.fb.group({
      id:0,
      color: ["", [Validators.required]],
      capacidad: ["", [Validators.required]],
      modelo: ["", [Validators.required]],
      material: ["", [Validators.required]],
      calidad: ["", [Validators.required]],
      precio: ["", [Validators.required]],
      cantidad: ["", [Validators.required]],
      fecha:  new Date(),
      liquidacion :[""]
    });
  }
  ngOnInit(): void {
  }
  dateFilter: (date: Date | null) => boolean =
  (date: Date | null) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
    //0 means sunday
    //6 means saturday
}
  save(f){

    if(this.ruta.snapshot.paramMap.get('id')){
      this.service.savaActualizar(f.value).subscribe((data:any)=>{
        this.router.navigateByUrl('/ingresos');
    
      });
    }
    else{
  this.service.guardar(f.value).subscribe((data:any)=>{
    this.router.navigateByUrl('/ingresos');

  });
}
  }

  actualizar(id){
    this.service.actualizarTaza(id).subscribe((data:any)=>{
      this.firstFormGroup.patchValue({
        id:data.id,
        color:data.color, 
        capacidad:data.color,
        modelo: data.modelo,
        material: data.material,
        calidad:  data.calidad,
        precio:  data.precio,
        cantidad: data.cantidad,
        fecha:  data.fecha,
        liquidacion : data.liquidacion
      })
    })
  
  }
}
