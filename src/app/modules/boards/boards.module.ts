import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';

import { BoardsRoutingModule } from './boards-routing.module';
import { DialogComponent } from './components/dialog/dialog.component';
import { BoardsComponent } from './components/pages/boards/boards.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DragComponent } from './components/pages/drag/drag.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DialogModule } from '@angular/cdk/dialog';
import { TablesComponent } from './components/pages/tables/tables.component';
import { CdkTableModule } from '@angular/cdk/table';


@NgModule({
  declarations: [
    DialogComponent,
    BoardsComponent,
    DragComponent,
    TablesComponent
  ],
  imports: [
    CommonModule,
    BoardsRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SharedModule,
    CdkAccordionModule,
    DragDropModule,
    BoardsRoutingModule,
    DialogModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    CdkTableModule
  ]
})
export class BoardsModule { }