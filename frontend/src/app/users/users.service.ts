import {Injectable} from '@angular/core'
import {Http, Headers} from '@angular/http';
import {User} from "../models/user";

import 'rxjs/add/operator/toPromise';


@Injectable()
export class UsersService {
  constructor(private http: Http) {}

  getUsers(): Promise<User[]> {
    return this.http.get('http://localhost:3000/users')
      .toPromise()
      .then(response => response.json() as User[])
      .catch(error => console.log(error))
  }
}
