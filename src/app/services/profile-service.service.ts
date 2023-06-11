import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  constructor(private http: HttpClient) {}

  getProfile(id: string): Observable<any> {
    return this.http.get<any>(`/api/profiles/${id}`);
  }
}
