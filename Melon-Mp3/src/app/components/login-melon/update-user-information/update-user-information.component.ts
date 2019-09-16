import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { AccountService } from 'src/app/services/account.service';
import * as jwt_decode from 'jwt-decode';
import { Location } from '@angular/common';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { AuthUserService } from 'src/app/services/auth.service';
import { Account } from 'src/app/models/account.class';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-user-information',
  templateUrl: './update-user-information.component.html',
  styleUrls: ['./update-user-information.component.scss']
})
export class UpdateUserInformationComponent implements OnInit {
   
  account:Account = new Account();
  editAccountForm: FormGroup;
  sub:Subscription

  constructor(private router: Router,
    public fb: FormBuilder,
    private accountService: AccountService,
    private actRoute: ActivatedRoute,
    private location: Location, 
    private userService:AuthUserService) {
    
  }

  ngOnInit() {
    console.log("ID::::::::::::::::" + localStorage.getItem("id"));
    this.getUser();

    this.updateAccountForm();
  }
  getUser(){
   
  
  }
  /* Update form */
  updateAccountForm() {
    this.sub =this.userService.getAccount().subscribe( account => {
      console.log(account);
      this.account = account;
      this.editAccountForm = this.fb.group({
        id: [this.account.id],
        fullName: [this.account.fullName, [Validators.required, Validators.pattern('^[a-zA-Z]+(([,. -][a-zA-Z ])?[a-zA-Z]*)*$')]],
        age: [this.account.age, [Validators.required, Validators.min(18)]],
        gender: [this.account.gender, Validators.required],
        email: [this.account.email, [Validators.required, Validators.email]],
        phone: [this.account.phone, [Validators.required, Validators.pattern('[0]\\d{9}')]],
        address: [this.account.address, [Validators.required]],
        username: [this.account.username],
        password: [this.account.password],
      })
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
        this.router.navigate(['melon.mp3.vn']);
        alert("Update User Information successfully!")
      });
    }
  }
}