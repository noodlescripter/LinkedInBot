import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of, throwError} from "rxjs";
import {catchError, map, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MyService {
  constructor(private httpClient: HttpClient) {
  }

  private httpOptions = {
    header: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  postUserCredentials_(email: string, password: string, jobNames: string, phoneNumber: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = `http://localhost:2000/userCredentials`;
    const userCredentials = {userEmail: email, userPassword: password, jobNames: jobNames, phoneNumber: phoneNumber};
    return this.httpClient.post(url, userCredentials, httpOptions).pipe(
      tap(() => console.log('User posted successfully')),
      catchError(this.handleError('postUserCredentials_'))
    );
  }

  postUserCredentials(email: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const url = `http://localhost:2000/userCredentials`;

    const userCredentials = {userEmail: email, userPassword: password}; // Shorthand object property syntax

    return this.httpClient.post(url, userCredentials, httpOptions).pipe(
      tap(() => {
        console.log('User credentials posted successfully');
      }),
      catchError(error => {
        console.error('User Credentials Handle Error:', error);
        return throwError('Something went wrong; please try again later.');
      })
    );
  }
}
