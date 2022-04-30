import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CarteirasComponent } from "./components/carteiras/carteiras.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { EventosComponent } from "./components/eventos/eventos.component";

const routes: Routes = [
    { path: 'carteiras', component: CarteirasComponent },
    { path: 'eventos', component: EventosComponent },
    { path: 'dashboard', component: DashboardComponent },
    // {  path: 'usuario',
    //   loadChildren: () => import('./components/usuario/usuario.module')
    //     .then(mod => mod.UsuarioModule)
    // },
    { path: '', redirectTo: "dashboard", pathMatch: 'full' }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }