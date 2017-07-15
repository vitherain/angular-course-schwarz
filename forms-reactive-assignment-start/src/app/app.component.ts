import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectForm: FormGroup;
  statuses: Array<any>;

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [ Validators.required, this.invalidProjectName.bind(this) ], this.asyncInvalidProjectName.bind(this)),
      'email': new FormControl(null, [ Validators.required, Validators.email ]),
      'projectStatus': new FormControl('st'),
    });

    this.statuses = [{ value: 'st', text: 'Stable' }, { value: 'cr', text: 'Critical' }, { value: 'fn', text: 'Finished' }];

    /*this.projectForm.controls.projectName.statusChanges.subscribe(
      (status) =>
    );*/
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

  invalidProjectName(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Test') {
      return { invalidProjectName: true };
    }
    return null;
  }

  asyncInvalidProjectName(control: FormControl): Promise<any> | Observable<any> {
    console.log('called async validator');
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
          if (control.value === 'AsyncTest') {
            resolve({ asyncInvalidProjectName: true });
          } else {
            resolve(null);
          }
      }, 1500);
    });
  }
}
