import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Policy } from './policy';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  private baseUrl = 'http://localhost:2000/api/admins';

  constructor(private http: HttpClient) { }

  createUser(admin: any): Observable<any> {
     console.log("hello");
    return this.http.post(this.baseUrl, admin);
   }

   createPolicy(policy : any): Observable<any>{
    return this.http.post(`${this.baseUrl}`+`/policy`,policy);
  }
  
  getPolicyList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  
  getPolicy(id : number):Observable<any>{
     return this.http.get(`${this.baseUrl}/${id}`);
  }

  updatePolicy(policy :object):Observable<object>{
    return this.http.put(`${this.baseUrl}`+`/update`,policy);
  }
  
}
