import { Component, OnInit } from '@angular/core';
import { GlobalVariables } from 'src/app/global-variables';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  name:String = GlobalVariables.sitename

  tiles = ["Employee Recruitment", "Linking With Talented Software Developers"]

  constructor() { }

  ngOnInit(): void {
  }

}
