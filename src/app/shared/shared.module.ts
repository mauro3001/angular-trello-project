import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {OverlayModule} from '@angular/cdk/overlay';


import { BtnComponent } from './components/btn/btn.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [BtnComponent, NavbarComponent],
  imports: [CommonModule, FontAwesomeModule, OverlayModule],
  exports: [BtnComponent, NavbarComponent],
})
export class SharedModule {}
