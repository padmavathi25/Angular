import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IForm ,IFormControl} from '../interface/form.interface';

@Component({
  selector: 'app-dynamic-login-form',
  templateUrl: './dynamic-login-form.component.html',
  styleUrls: ['./dynamic-login-form.component.css']
})
export class DynamicLoginFormComponent implements OnInit {
  @Input() form!: IForm;
  dynamicFormGroup: FormGroup;



  constructor(private fb: FormBuilder) {
    this.dynamicFormGroup = this.fb.group({}, { updateOn: 'submit' });
  }

  ngOnInit(): void {
     //check if it has the form group
      if(this.form?.formControls){
        const formGroup: any = {};
        this.form.formControls.forEach((control: any) => {
        const controlValidators: any = [];
          if (control.validators) {
            control.validators.forEach((val: any) => {
              if (val.validatorName === 'required') controlValidators.push(Validators.required);
              if (val.validatorName === 'email') controlValidators.push(Validators.email);
            });
          }
          formGroup[control.name] = [control.value || '', controlValidators];
        });
        this.dynamicFormGroup = this.fb.group(formGroup);
      }
    }

    onSubmit() {
      debugger
      if (this.dynamicFormGroup.valid) {
        console.log('Form values:', this.dynamicFormGroup.value);
      }
    }
    resetForm() {
      this.dynamicFormGroup.reset();
    }

    getValidationErrors(control : IFormControl):string{
      debugger
    const myFormControl = this.dynamicFormGroup.get(control.name);
    let errorMessage = '';
    control.validators.forEach((val) => {
      if (myFormControl?.hasError(val.validatorName as string)) {
        errorMessage = val.message as string;

      }
    });
    return errorMessage;
  }
}
