import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthUserService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/auth/token-storage.service';

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.css']
})
export class AnotherComponent implements OnInit {
sub:Subscription
  constructor(
    private authUserService:AuthUserService,
    private token :TokenStorageService
  ) { }

  ngOnInit() {
    console.log(localStorage.getItem("AuthToken"));
    console.log(this.token.getToken());
    
    this.getAuth();
    console.log(this.token.signOut());
    
  }
  getAuth(){
    this.sub = this.authUserService.getUser().subscribe( auth => {
      console.log(auth);
    })
  }
}
