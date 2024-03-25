import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import { ScrollComponent } from './pages/scroll/scroll.component';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    ScrollComponent,
  ],
  imports: [
    CommonModule,
    OverlayModule,
    FontAwesomeModule,
    SharedModule,
    ReactiveFormsModule,
    CdkTableModule,
    CdkVirtualScrollViewport
  ],
})
export class ScrollModule { }
