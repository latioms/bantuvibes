import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { GestionComponent } from './gestion.component';
import { PlatsComponent } from './plats/plats.component';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';



@NgModule({
  declarations: [GestionComponent, PlatsComponent, SidenavComponent],
  imports: [
    RouterModule,
    CommonModule,
  ],
  exports: [SidenavComponent, PlatsComponent, SidenavComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class GestionModule { }
