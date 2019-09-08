import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthLoginInfo } from 'src/app/models/login-info.class';
import { Router } from '@angular/router';
import { AuthUserService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/auth/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public sub:Subscription;
  public formLogin:FormGroup;
  public loginInfo:AuthLoginInfo;

  constructor(
    private formLoginBuilder:FormBuilder,
    private router:Router,
    private  authUserService: AuthUserService,
    
    private tokenStorage:TokenStorageService,

  

  ) { }

  ngOnInit() {
    this.getValidation();
  }
getValidation(){
  this.formLogin = this.formLoginBuilder.group({
    username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]],
      password: ['', [Validators.required]],
  })
}

onSubmit(){
  if(this.formLogin.valid){
    this.loginInfo = new AuthLoginInfo( this.formLogin.value.username, this.formLogin.value.password);
    this.sub = this.authUserService.attemptAuth(this.loginInfo).subscribe( token => {
      this.tokenStorage.saveToken(token.accessToken);
      this.tokenStorage.saveUsername(token.username);
      this.tokenStorage.saveAuthorities(token.authorities);
      this.sub = this.authUserService.getUser().subscribe( user => {
        console.log(user);
      })

      console.log(this.tokenStorage.getToken());
       this.router.navigate(['/melon.mp3.vn/artist']);
    })
  }
}



}
