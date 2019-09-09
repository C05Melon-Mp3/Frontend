import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { AuthUserService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private roles: string[];
  public authority: boolean;
  public username: string;

  constructor(
    private tokenStorage: TokenStorageService,
   private router:Router
  ) { }

  ngOnInit() {
    this.editHeader();
  }
  editHeader() {
    console.log(this.tokenStorage.getAuthorities());

    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN' || role === 'ROLE_USER') {
          this.authority = true;
        }else {
          this.authority = false;
        }
      });
    }
    
  }
  // khi logout thì ta get user lại thì sẽ không get được nhé

  logout() {
    
    this.tokenStorage.signOut();
    this.tokenStorage.signOut1();
   this.router.navigate(['/melon.mp3.vn/login']);
  }
}
