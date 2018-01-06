import {Component, HostListener, OnInit} from '@angular/core';
import {dropDown} from '../animations/animations';

const {remote} = require('electron');
const { BrowserWindow } = remote;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [dropDown]
})
export class HomeComponent implements OnInit {
  menuState = 'hidden';

  constructor() {
  }

  ngOnInit() {

  }

  dropdown() {
    this.menuState = 'dropDown'
  }

  @HostListener('window:mousedown', ['$event'])
  mousedown(event: MouseEvent) {
    console.log();

    switch (event.srcElement.id) {
      case 'app_exit':
        window.close();
        break;
      case 'app_minimize':
        console.log('mini', remote.BrowserWindow.getFocusedWindow().isMinimizable()
        )
        BrowserWindow.getFocusedWindow().minimize();
        break;
      case 'app_help':
        break;
      default:
        this.menuState = 'hidden';
    }

  }


  app_close() {
    console.log('close')

  }
}
