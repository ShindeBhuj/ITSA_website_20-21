import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventAPIService {

  baseurl = "http://itsapvg.co.in/";
	
/*  baseurl = "http://127.0.0.1:8000/";
*/
	
  httpHeaders = new HttpHeaders({'content-type': 'application/json'});

  constructor(private http: HttpClient) {  }

  getAllEvents(): Observable<any>{
  	return this.http.get(this.baseurl + 'DataOfEvents/events', {headers: this.httpHeaders});
  }
}
