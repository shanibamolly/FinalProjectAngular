import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminloginauthenticationService {

  id: number;

  password: string;

  private baseUrl = 'http://localhost:2000/api/admins/checklogin';

  constructor(private http: HttpClient) { }

  /*authenticate(username,password)
  {
    if(username === "admin" && password === "password")
    {
      sessionStorage.setItem('username',username)
      return true;
    }
    else{
      return false;
    }
  }
  */

  authenticate(id: number, password: string): Observable<any> {
    console.log(id);
    sessionStorage.setItem("id", id.toString());
    return this.http.get(`${this.baseUrl}/${id}/${password}`);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('id')
    this.id = (+user);
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('id')
  }

}
