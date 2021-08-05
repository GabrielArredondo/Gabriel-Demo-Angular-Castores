import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './global/template/template/template.component';
import { ComprarComponent } from './tazas/comprar/comprar.component';
import { HomeComponent } from './tazas/home/home.component';
import { TazaListaComponent } from './tazas/taza-lista/taza-lista.component';
import { TazaRegistroComponent } from './tazas/taza-registro/taza-registro.component';
import { TazaVentaComponent } from './tazas/taza-venta/taza-venta.component';

const routes: Routes = [
  { path: '', component: TemplateComponent,
  children: [
    {path: 'home', component: HomeComponent},
    {path:'ingresos', component:TazaListaComponent},
    {path:'registro', component:TazaRegistroComponent},
    {path:'registro/:id', component:TazaRegistroComponent},
    {path:'ventas', component:TazaVentaComponent},
    {path:'compra', component:ComprarComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
