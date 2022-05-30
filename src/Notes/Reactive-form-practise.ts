<h3 class="title">Reactive forms exercise module</h3>

<div class="login-box">
    <form [formGroup]="myForm" (ngSubmit)="loginUser()">
        <div class="form-group">
            <label for="oldpassword">Old Password</label>
            <input type="password" id="oldpassword" formControlName="oldpassword" placeholder="Enter your old password" class="form-control">
            <div *ngIf="oldpassword?.touched && oldpassword?.invalid" class="alert alert-danger">
                <div *ngIf="oldpassword?.errors?.['required']">
                    0ld Password required
                </div>
                <div *ngIf="oldpassword?.errors?.['invalidOldPassword']">
                    Old Password is not valid
                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="newpassword">New Password</label>
            <input type="password" id="newpassword" formControlName="newpassword" placeholder="Enter your new password" class="form-control">
            <div *ngIf="newpassword?.touched && newpassword?.invalid" class="alert alert-danger">
                New password required
            </div>
        </div>

        <div class="form-group">
            <label for="cnfrmpassword">Confirm Password</label>
            <input type="password" id="cnfrmpassword" formControlName="cnfrmpassword" placeholder="Enter your new password again" class="form-control">
            <div *ngIf="cnfrmpassword?.touched && cnfrmpassword?.invalid" class="alert alert-danger">
                Confirm password required
            </div>
        </div>

        <span>
            <button type="submit" class="btn btn-primary">Change Password</button>
        </span>
    </form>
</div>
          
<!-- Ts File -->
          
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UsernameValidators } from '../../../../miniprj1/src/app/signup-form/username.validators';
import { PasswordValidators } from '../reactive-form/password.validators'
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({      // myForm name should be matched with FormGroup name in <form> tag
      oldpassword: new FormControl('', [              // Oldpassword name should be matched with formControlName
        Validators.required,
        PasswordValidators.validOldPassword
      ]),
      newpassword: new FormControl('', Validators.required),
      cnfrmpassword: new FormControl('', Validators.required)
    });
  }

  get oldpassword() {                            // getter for getting instace of form control obj used to display the error msgs in template
    return this.myForm.get('oldpassword');
  }

  get newpassword() {
    return this.myForm.get('newpassword');
  }

  get cnfrmpassword() {
    return this.myForm.get('cnfrmpassword');
  }

  loginUser() {
    console.log(this.myForm.value);
  }


  ngOnInit(): void {
  }

}
