// admin-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionPage } from './administracion.page';

const routes: Routes = [
  { path: '', component: AdministracionPage }, // Define las rutas según tus necesidades
  // ...
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }