// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { map, tap, Observable, catchError, of } from 'rxjs';
// import { User } from './user';

// @Injectable({
//   providedIn: 'root',
// })

// export class GithubApiService {
//   private githubApiUrl = 'api/username'; // URL to web api

//   httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
//   };

//   constructor(private httpClient: HttpClient) {}

//   getStaticUser<Data>(login: string): Observable<User> {
//     return of()
//   }

//   getUser<Data>(login: string): Observable<User> {
//     const url = `${this.githubApiUrl}/?username=${login}`;
//     return this.httpClient.get<User[]>(url).pipe(
//       map((user) => user[0]), // returns a {0|1} element array
//       tap((u) => {
//         const outcome = u ? 'fetched' : 'did not find';
//         console.log(`${outcome} username=${login}`);
//       }),
//       catchError(this.handleError<User>(`getUser username=${login}`))
//     );
//   }

//     /**
//    * Handle Http operation that failed.
//    * Let the app continue.
//    *
//    * @param operation - name of the operation that failed
//    * @param result - optional value to return as the observable result
//    */
//      private handleError<T>(operation = 'operation', result?: T) {
//       return (error: any): Observable<T> => {  
//         console.error(error); 
//         console.log(`${operation} failed: ${error.message}`);
  
//         // Let the app keep running by returning an empty result.
//         return of(result as T);
//       };
//     }
// }
