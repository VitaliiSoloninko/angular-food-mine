import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';

var pendingRequests = 0;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private userService: UserService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const user = this.userService.currentUser;
    if (user.token) {
      request = request.clone({
        setHeaders: {
          access_token: user.token,
        },
      });
    }

    return next.handle(request);
  }
}
