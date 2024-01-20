import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie-service";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService) { }

  public createUser(token:any){
    this.cookieService.set('user-token',token,60*60*24*5);
  }

  public createAdmin(token:string){
    this.cookieService.set('admin-token',token,60*60*24*5);
  }

  public googleLogin(token:any){
    this.cookieService.set('profile-token',token,60*60*24*5);
  }

  public googleLoginName(token:any){
    this.cookieService.set('profile-name',token,60*60*24*5);
  }

  public googleLoginEmail(token:any){
    this.cookieService.set('profile-email',token,60*60*24*5);
  }

  public googleLoginPicture(token:any){
    this.cookieService.set('profile-picture',token,60*60*24*5);
  }

  public googleLoginFamilyName(token:any){
    this.cookieService.set('profile-family-name',token,60*60*24*5);
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

  public isUserProfile() {
    let profile = this.cookieService.get('profile-token');
    return profile.length !== 0;
  }

  public profileName() {
    return this.cookieService.get('profile-name').toString();
  }

  public profileEmail() {
    return this.cookieService.get('profile-email').toString();
  }

  public profilePicture() {
    return this.cookieService.get('profile-picture').toString();
  }

  public profileFamilyName() {
    return this.cookieService.get('profile-family-name').toString();
  }

  public userEmail() {
    return this.cookieService.get('user-token').toString();
  }

  public adminEmail() {
    return this.cookieService.get('admin-token').toString();
  }

  public userProfile() {
    return this.cookieService.get('profile-token').toString();
  }

}
