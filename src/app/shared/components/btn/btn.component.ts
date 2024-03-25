import { Component, OnInit, Input } from '@angular/core';
type buttonType = 'button' | 'restet' | 'submit';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
})
export class BtnComponent implements OnInit {
  @Input() typeBtn: buttonType = 'button';
  @Input() color: keyof typeof this.mapColors = 'primary';

  mapColors = {
    success: {
      'bg-green-700': true,
      'hover:bg-green-800': true,
      'focus:bg-green-300': true,
      'text-white-300': true
    },
    primary: {
      'bg-sky-700': true,
      'hover:bg-sky-800': true,
      'focus:bg-sky-300': true,
      'text-white-300': true
    },
    danger: {
      'bg-indigo-700': true,
      'hover:bg-red-800': true,
      'focus:bg-red-300': true,
      'text-red-300': true
    },
    gray: {
      'bg-gray-200': true,
      'hover:bg-gray-800': true,
      'focus:bg-gray-300': true,
      'text-gray-800': true
    }
  };

  ngOnInit(): void {}

  get colors() {
    const colors = this.mapColors[this.color];
    if(colors) {
      return colors;
    }
    return {};
  }
}
