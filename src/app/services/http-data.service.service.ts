import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Registers } from '../models/registers.model';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpDataServiceService {
  base_Url:string=environment.baseURL;

  constructor( private http: HttpClient) { }


  //http options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  //http API Errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Default Error Handling
      console.log(
        `An error occurred ${error.status}, body was: ${error.error}`
      );
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.log(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    // Return Observable with Error Message to Client
    return throwError(
      'Something happened with request, please try again later.'
    );
  }

  createItem(item: any): Observable<Registers> {
    return this.http
      .post<Registers>(`${this.base_Url}/registers.json`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }


  getList(): Observable<Registers[]> {
    return this.http
      .get<any>(`${this.base_Url}/registers.json`)
      .pipe(
        retry(2),
        catchError(this.handleError),
        map(response => {
          // Verificar si la respuesta contiene un array de registros
          if (Array.isArray(response)) {
            return response as Registers[];
          } else if (response && typeof response === 'object') {
            // Convertir el objeto de respuesta a un array de registros
            return Object.keys(response).map(key => ({
              id: key,
              ...response[key],
            }));
          } else {
            throw new Error('La respuesta no es válida');
          }
        })
      );
  }
  

  checkEmail(emailValue: string): Observable<boolean> {
    return this.getList().pipe(
      map((data) => {
        const emailExists = data.some((item: Registers) => item.email === emailValue);
        return emailExists;
      })
    );
  }
  
  
  
}
