import { Component, OnInit } from '@angular/core';
import { GlobalVariables } from 'src/app/global-variables';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  name:String = GlobalVariables.sitename

  contactForm = new FormGroup({
    firstName: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.contactForm.value)

    this.http.post("http://localhost:4300/contact", this.contactForm.value).subscribe( 
    (err) => {
        if(err) console.log("braking" + err);
        console.log("Success"); 
    })
  }
}
