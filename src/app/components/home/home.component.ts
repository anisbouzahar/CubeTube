import { Component, OnInit } from '@angular/core';
import * as path from "path";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('path :' ,path.join(__dirname, '/src/app/assets/icons/CubeTube.png'));

  }

}
