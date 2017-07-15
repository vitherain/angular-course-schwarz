import { Component, ViewChild } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('frm') frm: NgForm;
  @ViewChild('email') email: FormControl;
  defaultSubscription: string = 'advanced';

  onSubmit() {
    console.log(this.email);
    console.log(this.frm);
  }
}
