import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LeerHuComponent } from './components/leer-hu/leer-hu.component';
import { PanelComponent } from './components/panel/panel.component';

const routes: Routes = [
  { path: '', component: LeerHuComponent },
  { path: 'leer-hu', component: LeerHuComponent},
  { path: 'panel', component: PanelComponent},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
