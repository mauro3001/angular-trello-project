import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardsComponent } from './components/pages/boards/boards.component';
import { DragComponent } from './components/pages/drag/drag.component';
import { TablesComponent } from './components/pages/tables/tables.component';


/**const routes: Routes = [
  {
    path: '',
    component: BoardsComponent
  },
  {
    path: ':id',
    component: DragComponent
  },
];*/
const routes: Routes = [
  {
    path: 'boards',
    component: BoardsComponent
  },
  {
    path: 'drag',
    component: DragComponent
  },
  {
    path: 'products',
    component: TablesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardsRoutingModule { }