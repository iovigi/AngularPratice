import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  statuses = ['Stable', 'Critical', 'Finished'];

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, Validators.required, this.forbiddenProjectNameAsync),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl("Stable")
    });
  }

  onSubmit() {
    console.log(this.projectForm);
  }

  forbiddenProjectName(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Test') {
      return { 'projectNameIsForbidden': true };
    }

    return null;
  }

  forbiddenProjectNameAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ 'projectNameIsForbidden': true });
        }
        else {
          resolve(null);
        }
      }, 1500)
    });

    return promise;
  }
}
