import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { ServiceModule } from './services/service.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TiposgastosComponent } from './components/tiposgastos/tiposgastos.component';
import { AppRoutingModule } from './approuting.module';
import { EventosComponent } from './components/eventos/eventos.component';
import { CarteirasComponent } from './components/carteiras/carteiras.component';

@NgModule({
  declarations: [AppComponent, CarteirasComponent, EventosComponent, DashboardComponent, TiposgastosComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    SharedModule,
    ServiceModule,
    AppRoutingModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
