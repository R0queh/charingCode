import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CursosOffComponent } from './cursos-off/cursos-off.component';
import { CursosOnComponent } from './cursos-on/cursos-on.component';
import { EntrarComponent } from './entrar/entrar.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path: '', redirectTo: 'menu', pathMatch:'full'},

  {path:'menu', component:MenuComponent},
  {path:'entrar', component:EntrarComponent},
  {path: 'cadastrar', component:CadastrarComponent},
  {path: 'cursos', component:CursosOffComponent},
  {path:'usuario' , component:CursosOnComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
