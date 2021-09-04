import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ArticleService } from 'src/app/service/article.service';
import { SharedService } from 'src/app/service/shared.service';
import { PoupUpDeleteAllComponent } from '../../poup-up-delete-all/poup-up-delete-all.component';
import { PoupAddUpdateArticlesComponent } from '../poup-add-update-articles/poup-add-update-articles.component';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  listArt: any[] = [];
  p:number=1;
  term: any;
  constructor(public sahredserv:SharedService,private modalService: NgbModal,private articleServ:ArticleService) { }

  ngOnInit(): void {
    this.getlistArt();
  }



  async getlistArt() {
    await this.sahredserv.getAllArticle("article").subscribe({
      next: (data) => {
        const donne: any = data;
          this.listArt = donne;
          console.log(data);

      }, error: (err) => {
        this.listArt = [];
      }
    })
  }

  openADD()
  {
    const modalRef = this.modalService.open(PoupAddUpdateArticlesComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.add = true;
    modalRef.componentInstance.titre = "Ajouter Article";
    // this.sahredserv.reloadComponent()
  }
  openUpdate(item:any)
  {
    const obj = { article_id:item['article_id'], ref: item['ref'], nom: item['nom'], prix: item['prix'], mavance: item['mavance'], annuite: item['annuite'], mensualite: item['mensualite'], annuite2: item['2annuite'], mensualite2: item['2mensualite'] };
    const modalRef = this.modalService.open(PoupAddUpdateArticlesComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.add = false;
    modalRef.componentInstance.titre = "Modifier Article";
    modalRef.componentInstance.item = obj;
  }

  //


}
