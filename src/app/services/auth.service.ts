import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie-service";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService) { }

  public createUser(token:string){
    this.cookieService.set('user-token',token,60*60*24*5);
  }

  public createAdmin(token:string){
    this.cookieService.set('admin-token',token,60*60*24*5);
  }

  public logout(){
    this.cookieService.delete('user-token');
  }

  public logoutAdmin(){
    this.cookieService.delete('admin-token');
  }

  public isExists():boolean{
    let user = this.cookieService.get('user-token');
    return user.length !== 0; //user.length === 0?false:true
  }

  public isAdmin():boolean{
    let admin = this.cookieService.get('admin-token');
    return admin.length !== 0;
  }

  public userEmail() {
    return this.cookieService.get('user-token').toString();
  }

}
