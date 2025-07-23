import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient){}
  apiUrl = "https://stunning-couscous-697p7v7jpg4crgq9-8000.app.github.dev";

  get(path: string,cb:any){
    this.http.get(this.apiUrl+path, { headers: {
      'Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate'
    }}).subscribe((resp=>{
      cb(resp);
    }))
  }

  post(path: string, payload: any, cb:any){
    this.http.post(this.apiUrl+path,payload).subscribe((resp)=>{
      cb(resp);
    })
  }
}
