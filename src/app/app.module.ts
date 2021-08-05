import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { TazaListaComponent } from './tazas/taza-lista/taza-lista.component';
import { TazaRegistroComponent } from './tazas/taza-registro/taza-registro.component';
import { TazaVentaComponent } from './tazas/taza-venta/taza-venta.component';
import { HomeComponent } from './tazas/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { TemplateModule } from './global/template/template/template.module';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {  MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import{MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ComprarComponent } from './tazas/comprar/comprar.component';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    TazaListaComponent,
    TazaRegistroComponent,
    TazaVentaComponent,
    HomeComponent,
    ComprarComponent
  ],
  
  imports: [
    MatTableModule,
    BrowserModule,
    
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatPaginatorModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule,
    TemplateModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    MatGridListModule,
    FlexLayoutModule,
    MatCarouselModule.forRoot(),
    MatBadgeModule,
    MatSlideToggleModule,
    MatTabsModule,
    HttpClientModule
  ],
  exports:[
    RouterModule,
    TazaListaComponent,
    TazaRegistroComponent,
    TazaVentaComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
