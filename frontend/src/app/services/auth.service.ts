import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  private apiUrl = 'http://localhost:3000/api/users';
  private apiUrl2 = 'http://localhost:3000/api/products';


  constructor( private http:HttpClient ) { }

  getProd() {
    return this.http.get(this.apiUrl2+'/get',httpOptions);
  }

  register(user:any) {
    return this.http.post(this.apiUrl+'/register',user,httpOptions);
  }

  login(user:any) {
    return this.http.post(this.apiUrl+'/login',user, httpOptions)
    .pipe(map((res: any) => res));
  }

  storeUserData(token:any, user:any){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user))
    this.authToken = token
    this.user = user
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    return token;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear()
  }
}
