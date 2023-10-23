import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { AdministracionPage } from './administracion.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministracionRoutingModule
  ],
  declarations: [AdministracionPage]
})
export class AdministracionPageModule {}
