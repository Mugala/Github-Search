import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitsearchService {
  private username:string;

  //Use client id and client secret whilst we fetch data from github api to avoid limit restriction.
  private clientid = '865f88da5f9ccdcb077a';
  private clientsecret = '36bb92a36bc9c90b76cbd872bdb30394e7f4f4e6';

  constructor(private http:Http) { 
    console.log("service works");
    this.username = 'Mugala'; 

  }
  getProfileDesc(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  }

}
