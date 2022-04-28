import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidenavComponent],
  imports: [CommonModule, MaterialDesignModule],
  exports: [
    MaterialDesignModule,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
  ],
})
export class SharedModule {}
