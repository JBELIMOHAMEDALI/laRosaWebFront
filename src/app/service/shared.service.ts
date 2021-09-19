import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PoupUpDeleteAllComponent } from '../Private/poup-up-delete-all/poup-up-delete-all.component';
import { environment } from './../../environments/environment.prod';
import swal from 'sweetalert';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private router: Router,
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute, private httpClient: HttpClient) { }
  reloadComponent() {
    const currentRoute = this.router.url;
    this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
      this.router.navigate([currentRoute]);
    });
  }
  DeleteAll(id: string, point: any) {
    return this.httpClient.delete(environment.apiUrl + `${point}/delete/${id}`);
  }
  getAllArticle(point: any) {
    return this.httpClient.get(environment.apiUrl + point + "/get");
  }
  addAll(object: any, point: any) {
    // alert(JSON.stringify(object))
    return this.httpClient.post(environment.apiUrl + point + "/post", object);
  }
  UpdateAll(object: any, point: any,rederect?:boolean,pageRederect?:string) {
    return this.httpClient.patch(environment.apiUrl + `${point}/update/${object.id}`, object).
      subscribe({
        next: (data) => {
          this.modalService.dismissAll();
          swal('Success', '', 'success');
          if(!rederect){ this.reloadComponent()}else{this.router.navigate([pageRederect]);}

        }, error: () => {
          this.modalService.dismissAll();
          swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
        }
      });
  }
  openDelete(id: string, titre: string, point: string,rederect?:boolean,pageRederect?:string) {
    const modalRef = this.modalService.open(PoupUpDeleteAllComponent);
    modalRef.componentInstance.titre = titre;
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.point = point;
    modalRef.componentInstance.rederect = rederect;//pageRederect
    modalRef.componentInstance.pageRederect = pageRederect;//

  }
  getAllForList() {
    return this.httpClient.get(environment.apiUrl + "client/getNom");
  }
  getDetaileBeBs(point:string,id:string) {
    return this.httpClient.get(environment.apiUrl + `${point}/getDetaile/${id}`);
  }
}



