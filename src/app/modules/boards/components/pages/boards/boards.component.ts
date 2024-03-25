import { Component } from '@angular/core';
import { faBox, faWaveSquare, faClock, faAngleUp, faAngleDown, faBorderAll, faUsers, faGear, faHeart} from '@fortawesome/free-solid-svg-icons'
import { faTrello } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html'
})
export class BoardsComponent {

  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;
  faTrello = faTrello;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faHeart = faHeart;
  faGear = faGear;

  items = [
    {
      label: 'Personal Boards',
      items: [
        {label: 'Sub Item 1.1'},
        {label: 'Sub Item 1.2'},
      ]
    },
    {
      label: 'Team Boards',
      items: [
        {label: 'Sub Item 2.1'},
        {label: 'Sub Item 2.2'}
      ]
    },
  ]

}
