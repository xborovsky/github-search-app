import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

const CLIENT_ID = '430093c05fa165caa989';
const CLIENT_SECRET = 'e4e2e8c5d0f1a38f3fc4f5541a97ec54dbe64f11';
const API_URL = 'https://api.github.com/users';

@Injectable()
export class GithubService {

  constructor(private http:Http) { }

  getUser(username:String):Observable<any> {
    return this.http.get(`${API_URL}/${username}?clientId=${CLIENT_ID}&clientSecret=${CLIENT_SECRET}`)
      .map(res => res.json());
  }

  getRepositories(username:String):Observable<any> {
    return this.http.get(`${API_URL}/${username}/repos?clientId=${CLIENT_ID}&clientSecret=${CLIENT_SECRET}`)
      .map(res => res.json());
  }
}
