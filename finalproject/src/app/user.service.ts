import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  private baseUrl = 'http://localhost:2000/apii/users';

  constructor(private http: HttpClient) { }

  createUser(user: any): Observable<any> {
    console.log(user);
    return this.http.post(this.baseUrl, user);
   }
   
  getPolicyByName(name: string):Observable<any>{
    return this.http.get(`${this.baseUrl}/name/${name}`);
  }

  getPolicyByDuration(duration: number):Observable<any>{
    return this.http.get(`${this.baseUrl}/duration/${duration}`);
  }
  
  getPolicyById(id: number):Observable<any>{
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }

  getPolicy(id : number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  
}
