import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from '../contract/result';
import { Observable } from 'rxjs';
import { Advertisement } from '../contract/advertisement';
import { WhatsNew } from '../contract/whats-new';
import { Master } from '../contract/master';
import { Notification } from '../contract/notification';
import { Modelanswer } from '../contract/modelanswer';
import { Onlineapplication } from '../contract/onlineapplication';
import { environment } from '../../environments/environment';
import { User } from '../contract/user';
import jwt_decode from 'jwt-decode';
import { catchError, tap, map, mapTo } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../services/http-error-handler.service';
import { Token } from '@angular/compiler';


//import { HttpErrorHandler, HandleError } from './http-error-handler.service';
@Injectable({
  providedIn: 'root'
})

export class HomeService {


  private apiUrl = `${environment.api_url}`;
 // private handleError: HandleError;
 

  constructor(  private http: HttpClient,
    private httpErrorHandler: HttpErrorHandler
    ){}

    
  edit_master(id:any,edit_data:any) {
  
    return this.http.put<any>(this.apiUrl+"master/"+id,edit_data);
    
  }

  edit_advertisement(id:any,edit_data:any) {
  
    return this.http.put<any>(this.apiUrl+"advertisement/"+id,edit_data);
    
  }

  edit_whatsNew(id:any,edit_data:any) {
  
    return this.http.put<any>(this.apiUrl+"home/"+id,edit_data);
    
  }

  edit_oa(id:any,oa_data:any) {
  
    return this.http.put<any>(this.apiUrl+"onlineapplication/"+id,oa_data);
    
  }

  edit_ma(id:any,ma_data:any) {
  
    return this.http.put<any>(this.apiUrl+"modelanswer/"+id,ma_data);
    
  }

  edit_noti(id:any,noti_data:any) {
  
    return this.http.put<any>(this.apiUrl+"notification/"+id,noti_data);
    
  }


  edit_result(id:any,res_data:any) {
  
    return this.http.put<any>(this.apiUrl+"result/"+id,res_data);
    
  }

  edit_latest_result(id:any,lat_res_data:any) {
  
    return this.http.put<any>(this.apiUrl+"latest_result/"+id,lat_res_data);
    
  }

   getmasterdata():Observable<Master[]> {
  
    return this.http.get<Master[]>(this.apiUrl+"master/published");
    
  }

  getmasterdata_all():Observable<Master[]> {
  
    return this.http.get<Master[]>(this.apiUrl+"master/");
    
  }

  postmasterdata(masterdata:any){
  
    return this.http.post<any>(this.apiUrl+"master",masterdata)

  }
  

  postadvertisementdata(advdata:any){
  
    return this.http.post<any>(this.apiUrl+"advertisement",advdata)

  }

  posthomedata(homedata:any){
  
    return this.http.post<any>(this.apiUrl+"home",homedata)

  }


  postoadata(oadata:any){
  
    return this.http.post<any>(this.apiUrl+"onlineapplication",oadata)

  }


  postmadata(madata:any){
  
    return this.http.post<any>(this.apiUrl+"modelanswer",madata)

  }

  postnotidata(notidata:any){
  
    return this.http.post<any>(this.apiUrl+"notification",notidata)

  }

  postresdata(resdata:any){
  
    return this.http.post<any>(this.apiUrl+"result",resdata)

  }

  
  postlatest_resdata(latest_resdata:any){
  
    return this.http.post<any>(this.apiUrl+"latest_result",latest_resdata)

  }


  getonlineapplicationdata():Observable<Onlineapplication[]> {
  
    return this.http.get<Onlineapplication[]>(this.apiUrl+"onlineapplication/published");
    
  }

  getnotificationdata():Observable<Notification[]> {
  
    return this.http.get<Notification[]>(this.apiUrl+"notification/published");
    
  }

  getmodelanswerdata():Observable<Modelanswer[]> {
  
    return this.http.get<Modelanswer[]>(this.apiUrl+"modelanswer/published");
    
  }



  gethomes():Observable<WhatsNew[]> {
  
    return this.http.get<WhatsNew[]>(this.apiUrl+"home/published");
    
  }



  getresult():Observable<Result[]> {
  
    return this.http.get<Result[]>(this.apiUrl+"result/published");
  }


  getlatestresult():Observable<Result[]> {
  
    return this.http.get<Result[]>(this.apiUrl+"latest_result/published");
  }


  getresult_id():Observable<Result[]> {
  
    return this.http.get<Result[]>(this.apiUrl+"result/");

  }

  getadvt():Observable<Advertisement[]> {
  
    return this.http.get<Advertisement[]>(this.apiUrl+"advertisement/published/")

  }

  /* signup(data:User) {
    
    return this.http.post(this.apiUrl+"auth/signup/", data)
    
  }



  login(data: any): Observable<boolean> {
   
    return this.http.post(this.apiUrl+"auth/login/", data)
    .pipe(
      tap(user => this.doLogin(user)),
      map(()=>true),
     // catchError(this.handleError('user', false))
    )
  }
  doLogin(user: any) {
    localStorage.setItem('currentUser', user);
}

getCurrentUser() {
  return JSON.parse(localStorage.getItem('currentUser')|| '{}');
}

getDecodeToken(token: string) {
  return jwt_decode(token);
}

token:any={};
isLoggedIn() {
  const currentUser = this.getCurrentUser();
  if (currentUser) {
   this.token.exp = this.getDecodeToken(currentUser.token);
    const currentTime = Math.round((new Date()).getTime() / 1000);
    if (this.token.exp > currentTime) {
      return true;
    } else {
      this.logout();
      localStorage.clear();
    }
  }
  return false;
}
} */

logout() {
  localStorage.removeItem('currentUser');

}
}
