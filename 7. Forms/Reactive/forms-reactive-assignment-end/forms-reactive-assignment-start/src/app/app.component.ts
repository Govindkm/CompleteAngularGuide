import { Component } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myFormGroup:FormGroup = new FormGroup({
    'Project Name': new FormControl('', [Validators.required, this.testValidator]),
    'Email': new FormControl('', [Validators.required, Validators.email])
  });

  testValidator(formControl:FormControl):ValidationErrors | null{
    return formControl.value == 'Test' ? {'forbiddenName': {value: formControl.value}} : null;
  }
}
