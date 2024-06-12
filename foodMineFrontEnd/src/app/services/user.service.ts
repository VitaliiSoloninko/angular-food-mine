import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../shared/models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(new User());
  public userObservable: Observable<User>;
  constructor(private http: HttpClient) {
    this.userObservable = this.userSubject.asObservable();
  }

  // login(userLogin: IUserLogin): Observable<User> {
  //   return this.http
  //     .post<User>(USER_LOGIN_URL, userLogin)
  //     .pipe(tap({ next: (user) => {} }, error: (errorResponse)=>{}));
  // }
}
