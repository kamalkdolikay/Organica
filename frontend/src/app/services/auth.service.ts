import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;

  private apiUrl = 'http://localhost:3000/api/users';

  constructor( private http:HttpClient ) { }

  register(user:any) {
    return this.http.post(this.apiUrl+'/register',user,httpOptions);
  }
}
