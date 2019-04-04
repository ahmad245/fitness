import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders, HttpParams, HttpRequest}from '@angular/common/http';
import'rxjs/Rx';
import { IserverArray } from '../sheard/serverArray';
@Injectable()
export class HttpServiceService {

  constructor(private http:HttpClient) 
  { }
  
  storService(servers)
  {
    const header=new Headers({'content-Type':'application/json'});
  //   return this.http.put('https://test-e6a37.firebaseio.com/data.json',
  //   servers,
  //   // {headers:new HttpHeaders().set('aitorization','bearer')}
  //   // {params:new HttpParams().set('','')}
  // ).map((respnse)=>{return respnse});

  const req=new HttpRequest('PUT','https://test-e6a37.firebaseio.com/data.json',servers,
  {reportProgress:true}
);

  return this.http.request(req);
}
  getDataFromFirebase()
  {
    return this.http.get<IserverArray[]>('https://test-e6a37.firebaseio.com/data.json');

  }

}
