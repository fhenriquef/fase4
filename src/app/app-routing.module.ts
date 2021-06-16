import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'clientes',
    loadChildren: () => import('./pagina/clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'modalcliente',
    loadChildren: () => import('./pagina/modalcliente/modalcliente.module').then( m => m.ModalclientePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pagina/login/login.module').then( m => m.LoginPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
