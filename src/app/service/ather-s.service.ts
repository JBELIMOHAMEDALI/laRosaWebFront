import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AtherSService {

  constructor(private httpClient: HttpClient) { }
  //http://localhost:5001//getZoneByRegion/2

  getZoneBayRegion(id: string) {
    return this.httpClient.get(environment.apiUrl + `zone/getZoneByRegion/${id}`);
  }
  getInfoCli(id: string) {
    return this.httpClient.get(environment.apiUrl + `client/get/${id}`);
  }
  getIdRegion(nomreg: string,nomzone:string) {
    return this.httpClient.get(environment.apiUrl + `client/getRegitionBayNom/${nomreg}/${nomzone}`);
  }
  getOneBayId(id:string,point:string)
  {
    return this.httpClient.get(environment.apiUrl + `${point}/get/${id}`);
  }
  getAgontByType(type:string)
  {
    return this.httpClient.get(environment.apiUrl+`agent/getbytype/${type}`);
  }

  getInfoAgontByBe(id:string)
  {
    return this.httpClient.get(environment.apiUrl+`other/getInfoAgontBe/${id}`);
  }
  getInfoAgontByBs(id:string)
  {
    return this.httpClient.get(environment.apiUrl+`other/getInfoAgontBs/${id}`);
  }
  getInfoContraPayment(id:string)
  {
    return this.httpClient.get(environment.apiUrl+`payment/get_detalie_payment_contra/${id}`);
  }//contrat/getInfoContra/

  getContratInfo(id:string)
  {
    return this.httpClient.get(environment.apiUrl+`contrat/getInfoContra/${id}`);
  }
  getOneContrat(id:string)
  {
    return this.httpClient.get(environment.apiUrl+`contrat/get/${id}`);
  }
  // getContraBayNumero(num:string)
  // {
  //   return this.httpClient.get(environment.apiUrl+`contrat/getContraBayNumro/${num}`);
  // }

}
