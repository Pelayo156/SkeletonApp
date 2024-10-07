import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  // Usuarios validos para el login
  private validUsers = [
    { email: 'admin@admin.com', password: 'admin' },
    { email: 'basti@basti.com', password: '1234' }
  ];

  validateUser(e:string, p:any) {
    if(this.validUsers.find(user => user.email == e && user.password == p)) {
      return true;
    }
    return false;
  }
}
