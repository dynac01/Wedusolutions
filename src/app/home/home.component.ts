import { Component, OnInit } from '@angular/core';
import { GlobalVariables } from 'src/app/global-variables';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name:String = GlobalVariables.sitename
  heading:string = '"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."'
  subheading:string = '- Lorem Ipsum'

  constructor() { }

  ngOnInit(): void {
  }

}
