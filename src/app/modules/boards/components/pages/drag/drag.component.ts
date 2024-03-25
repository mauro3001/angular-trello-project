import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Column, ToDo } from 'src/app/models/todo.model';
import { Dialog } from '@angular/cdk/dialog';
import { DialogComponent } from 'src/app/modules/boards/components/dialog/dialog.component';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styles: [
    `
      /* Animate items as they're being sorted. */
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      /* Animate an item that has been dropped. */
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
})
export class DragComponent implements OnInit {
  columns: Column[] = [
    {
      title: 'To Do',
      todos: [
        {
          id: '1',
          title: 'Sapo',
        },
        {
          id: '2',
          title: 'Second',
        },
        {
          id: '3',
          title: 'Third',
        },
      ],
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '4',
          title: 'Fourth',
        },
        {
          id: '5',
          title: 'Fifth',
        },
      ],
    },
    {
      title: 'Done',
      todos: [
        {
          id: '6',
          title: 'Sixth',
        },
      ],
    },
  ];

  tasks: ToDo[] = [];

  doing: ToDo[] = [];

  done: ToDo[] = [];

  constructor(private dialog: Dialog) {}

  ngOnInit(): void {}
  drop($event: CdkDragDrop<ToDo[]>) {
    if ($event.previousContainer === $event.container) {
      moveItemInArray(
        $event.container.data,
        $event.previousIndex,
        $event.currentIndex
      );
    } else {
      transferArrayItem(
        $event.previousContainer.data,
        $event.container.data,
        $event.previousIndex,
        $event.currentIndex
      );
    }
  }

  addColumn() {
    this.columns.push({
      title: 'New Column',
      todos: [
        {
          id: '7',
          title: 'Seventh',
        },
      ],
    });
  }

  openDialog(task: ToDo) {
    console.log('task', task);
    const dialogRef = this.dialog.open(DialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      autoFocus: false,
      data: {
        task: task,
      },
    });
    dialogRef.closed.subscribe((result) => {
      console.log('result', result);
    }
    );
  }
}
