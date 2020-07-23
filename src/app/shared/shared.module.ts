import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';
import {DashboardRoutingModule} from '../dashboard/dashboard-routing.module';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [NavbarComponent, LayoutComponent, MenuComponent],
  exports: [
    NavbarComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class SharedModule { }
