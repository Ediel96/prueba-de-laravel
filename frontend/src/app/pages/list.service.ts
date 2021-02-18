import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  apiURL = environment.apiURL;
  url = environment.url;
  listUrl : string;
  listAdd : string;

  constructor(private httpAuth : HttpClient) {
    // this.listUrl = `${this.apiURL}${this.url}usuario`;
    this.listAdd = `${this.apiURL}${this.url}usuario`;
  }

  addUser(data:{}){
    return this.httpAuth.post(`${this.listAdd}`, data);
  }

  listUser(){
    return this.httpAuth.get(`${this.listAdd}`);
  }
}
