import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Products } from '../models/products.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SaveUpService {
  private baseURL:string = environment.baseURL;

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  }

  handleError(error:HttpErrorResponse){
    if (error.error instanceof ErrorEvent){
      console.log(`An error has ocurred, body: ${error.error}`)
    }
    else {
      console.log(`Backend returned ${error.status}, body was: ${error.error}`)
    }
    return throwError(
      ()=> new Error('Something happened. Please try again')
    );
  } 

  getProducts():Observable<Products[]>{
    return this.http.get<Products[]>(`${this.baseURL}/products.json`).pipe(
      retry(2),catchError(this.handleError)
    )
  }

  getProductsSmall():Observable<Products[]>{
    const limit = 4;
    const url = `${this.baseURL}/products.json?_limit=${limit}`;
    return this.http.get<Products[]>(url).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getProductsId(id:number):Observable<Products>{
    let url = `${this.baseURL}/products.json/${id}`
    return this.http.get<Products>(url).pipe(
      retry(2),catchError(this.handleError)
    )
  }

  getUserId(id:number):Observable<User>{
    let url = `${this.baseURL}/users.json/${id}`
    return this.http.get<User>(url).pipe(
      retry(2),catchError(this.handleError)
    )
  }

  updateUser(id:number,user:User):Observable<User> {
    let url = `${this.baseURL}/users.json/${id}`
    return this.http.put<User>(url,user,this.httpOptions).pipe(
      retry(2),catchError(this.handleError)
    )
  }
}
