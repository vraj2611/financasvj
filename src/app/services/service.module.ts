import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FirestoreService } from './firestore.service';
import { FinancasService } from "./financas.service";

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [FinancasService],
})
export class ServiceModule {}
