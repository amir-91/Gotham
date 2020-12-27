import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  httpOptionsNoAuth : any;
  menuData:any;
  formData: any;

  public setdata(value: any) {
      this.formData = value;
      console.log('here in service')
      console.log(this.formData)
  }




  constructor(private http: HttpClient) { 
    this.httpOptionsNoAuth = {
      headers: new HttpHeaders().set('No-Auth', 'true')
      .set('Accept', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set("Access-Control-Allow-Methods" , 'GET,POST,PATCH,DELETE,PUT,OPTIONS') 
      .set ("Access-Control-Allow-Headers" , 'Origin, Content-Type, X-Auth-Token, content-type')
  };
  }

  SERVER_URL = environment.SERVER_URL

  getMenuData() {
    return this.menuData
  }

  getFormData () {
    return this.formData
  }

  
  getMenu(): Observable <any> {
    return this.http.get<any>(this.SERVER_URL+ 'menu', { headers: this.httpOptionsNoAuth.headers}); //this will return observable (stream of data contiously)
  }

 postForm(): Observable <any> {
    return this.http.post<any>(this.SERVER_URL+ 'customer/add',this.formData ); //this will return observable (stream of data contiously)
  }
  
}
