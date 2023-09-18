import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule,],
  declarations: [HeaderComponent, SidebarComponent, ModalComponent],
  exports: [HeaderComponent, SidebarComponent, ModalComponent],
})
export class SharedModule {}
