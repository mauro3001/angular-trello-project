import { Component } from '@angular/core';
import { faBell, faInfoCircle} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  isOpen = false;
  isOpenBody = false;
  faBell = faBell;
  faInfoCircle = faInfoCircle;

}
