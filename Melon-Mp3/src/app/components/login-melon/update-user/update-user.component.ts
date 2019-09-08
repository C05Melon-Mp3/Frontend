import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  // submitted = false;

  // visible = true;
  // selectable = true;
  // removable = true;
  // addOnBlur = true;

  // @ViewChild('chipList', { static: true }) chipList;
  // readonly separatorKeysCodes: number[] = [];
  editAccountForm: FormGroup;

  constructor(private router: Router,
    public fb: FormBuilder,
    private accountService: AccountService,
    private actRoute: ActivatedRoute,
    private location: Location, ) {
    var accountId = localStorage.getItem("id");

    const id = 1;
    this.accountService.getAccountById(id).subscribe(data => {
      this.editAccountForm.patchValue(data)
    })
  }

  ngOnInit() {
    console.log("ID::::::::::::::::" + localStorage.getItem("id"));
    this.updateAccountForm();
  }
  /* Update form */
  updateAccountForm() {
    this.editAccountForm = this.fb.group({
      id: [],
      fullName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+(([,. -][a-zA-Z ])?[a-zA-Z]*)*$')]],
      age: [, [Validators.required, Validators.min(18)]],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0]\\d{9}')]],
      address: ['', [Validators.required]],
      username: [''],
      password: [''],
    })
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.editAccountForm.controls[controlName].hasError(errorName);
  }
  /* Go to previous page */
  goBack() {
    this.location.back();
  }
  /* Submit edit account */
  updateAccount() {
    if (this.editAccountForm.valid && window.confirm('Are you sure you wanna update?')) {
      this.accountService.updateUserInformation(this.editAccountForm.value).subscribe(data => {
        this.router.navigate(['melon.mp3.vn/login']);
        alert("Update User Information successfully!")
      });
    }
  }
}

