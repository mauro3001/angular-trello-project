import { Component, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import {
  faUser,
  faTag,
  faCheckSquare,
  faClock,
  faClose,
  faCheckToSlot,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { ToDo } from 'src/app/models/todo.model';

interface InputData {
  task: ToDo;
}

interface OutputData {
  rta: boolean;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent {
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;
  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  task: ToDo;

  constructor(
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) data: InputData
  ) {
    this.task = data.task;
    console.log(this.task);
  }

  close() {
    this.dialogRef.close();
  }

  closeWithRta(rta: boolean) {
    this.dialogRef.close({
      rta
    });
  }
}
