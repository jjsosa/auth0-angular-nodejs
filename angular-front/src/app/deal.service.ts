import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Deal } from './deal';

@Injectable()
export class DealService {
  // Define the routes we are going to interact with
  private url = 'http://localhost:3001'
  private publicDealsUrl = this.url + '/api/deals/public';
  private privateDealsUrl = this.url + '/api/deals/private'

  constructor(private http: HttpClient) { }

  // Implement a method to get the public deals
  getPublicDeals() {
    return this.http
      .get<Deal[]>(this.publicDealsUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Implement a method to get the private deals
  getPrivateDeals() {
    return this.http
      .get<Deal[]>(this.privateDealsUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Implement a method to handle errors if any
  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return throwError(err.message || err);
  }

  purchase(item) {
    alert(`You bought the: ${item.name}`);
  }
}