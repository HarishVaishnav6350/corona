import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'https://newsapi.org/v2/everything?q=apple&from=2025-04-06&to=2025-04-06&sortBy=popularity&apiKey=0465a35ab3e441bab8157f5c63ed6d82'
  constructor(private http: HttpClient) { }

  fetchData(): Observable<any> {
    {
      return this.http.get<any>(this.url);
    }

  }
}
