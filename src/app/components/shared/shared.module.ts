import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidenavComponent],
  imports: [CommonModule, MaterialDesignModule, RouterModule.forChild([])],
  exports: [
    MaterialDesignModule,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
  ],
})
export class SharedModule {}
