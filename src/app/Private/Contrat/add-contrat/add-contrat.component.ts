import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AtherSService } from 'src/app/service/ather-s.service';
import { SharedService } from 'src/app/service/shared.service';
import swal from 'sweetalert';
import { DatePipe } from '@angular/common'
import * as moment from 'moment';
@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrls: ['./add-contrat.component.css']
})
export class AddContratComponent implements OnInit {
  object: any = {};
  model: any = {};
  check: any;
  listClient: any[] = []//listArt
  listArt: any[] = []//listArt
  hchek: any;
  listRecouvreur: any[] = []
  listChefGroupe: any[] = []
  listVendeurCommercial: any[] = []
  type: string = ""
  titre: string = "Ajouter Contrats"
  objectInfo: any
  constructor(private shared: SharedService, private route: ActivatedRoute, private atherser: AtherSService, private router: Router, public datepipe: DatePipe) {
    const type: any = this.route.snapshot.paramMap.get('type')?.toString();
    this.type = type;
  }

  ngOnInit(): void {
    this.getlistArt();
    this.getlistCli();
    this.getListAgontRecouvreur()
    this.getListAgontChefGroupe()
    this.getListAgontVendeurCommercial()
    if (this.type != "add") {
      this.getInfoContraForUpdate()
      this.titre = "Modifer Contrats"
    }

  }

  async getlistCli() {
    await this.shared.getAllForList().subscribe({
      next: (data) => {
        const donne: any = data;
        this.listClient = donne;
      }, error: (err) => {
        this.listClient = [];
      }
    })
  }

  async getlistArt() {
    await this.shared.getAllArticle("article").subscribe({
      next: (data) => {
        const donne: any = data;
        this.listArt = donne;
      }, error: (err) => {
        this.listArt = [];
      }
    })
  }

  mangerForm(f: NgForm) {

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const daysFR: any = { 'Sunday': 'dimanche', 'Monday': 'lundi', 'Tuesday': 'mardi', 'Wednesday': 'mercredi', 'Thursday': 'jeudi', 'Friday': 'vendredi', 'Saturday': 'samedi' };
    var monthFr: any = { '01': 'janvier', '02': 'février', '03': 'mars', '04': 'avril', '05': 'mai', '06': 'juin', '07': 'juillet', '08': 'août', '09': 'septembre', '10': 'octobre', '11': 'novembre', '12': 'décembre' };
    let datePrmerech: any = this.datepipe.transform(f.value.premiereecheance, 'dd-MM-yyyy');

    let dd = datePrmerech.toString()

    //add 10row in Payment










//end add 10row in Payment
    const day = dd.substr(0, 2);
    const month = dd.substr(3, 2);
    const year = dd.substr(6, 4);
    var dateString = f.value.premiereecheance;
    var d = new Date(dateString);

    var dayName = days[d.getDay()];
    const nomDayFr = daysFR[dayName];
    const nomMonthFRR = monthFr[month]
    const finalDate = nomDayFr + " " + day + " " + nomMonthFRR + " " + year;
    const { numero, client, article, datecontrat,
      montant, avance, premiereecheance,
      commission_vendeur, annuite2, mensualite2,
      recouvreur, chef, comm, statucontrat,
      remarque, qte, nbrecheance, annuite } = f.value;
    const ddContra = this.datepipe.transform(f.value.datecontrat, 'dd-MM-yyyy');



    // add 10 row

// console.log(liste);

    // end  add 10 row


    if (this.type == "add") {
      const obj = {
        numero: numero, client: client['nom'] || this.model.client, article: article['nom'] || this.model.article, datecontrat: ddContra,
        qte: qte, nbrecheance: nbrecheance,
        montant: montant, avance: avance, premiereecheance: finalDate,
        commission_vendeur: commission_vendeur['nom'] || this.model.commission_vendeur, annuite2: annuite2, mensualite2: mensualite2,
        recouvreur: recouvreur['nom'] || this.model.recouvreur, chef: chef['nom'] || this.model.chef, comm: comm, statucontrat: statucontrat,
        remarque: remarque || "", active: "0", mensualite: annuite
      }
      this.shared.addAll(obj, 'contrat').subscribe({
        next: (data) => {
//add new 10 row;
var liste: Array<Object> = [];
let datePrmerech2: any = this.datepipe.transform(f.value.premiereecheance, 'yyyy-MM-dd');
var myFutureDate=new Date(datePrmerech2);
const obj2= {contrat:numero, date:this.datepipe.transform(myFutureDate, 'd/MMM/y')?.toString(), mensualite:annuite, paiedAmmount:0, dp:"", reste:annuite, validation:0}
liste.push(obj2)
for (var _i = 1; _i < nbrecheance; _i++) {
var newd=myFutureDate.setMonth(myFutureDate.getMonth()+1)
var datenew =this.datepipe.transform(newd, 'd/MMM/y')
const obj= {contrat:numero, date:datenew, mensualite:annuite, paiedAmmount:0, dp:"", reste:annuite, validation:0}
liste.push(obj)
}
const dn:any=liste[nbrecheance-1]
var datte2=dn['Date']
var date01:any =this.datepipe.transform(datte2, 'yyyy-MM-dd');
var myFutureDate2=new Date(date01);
for (var _i = 0; _i < annuite2; _i++) {
var newd=myFutureDate2.setMonth(myFutureDate2.getMonth()+1)
var datenew2 =this.datepipe.transform(newd, 'd/MMM/y')
const obj= {contrat:numero.toString(), date:datenew2?.toString(), mensualite:mensualite2.toString(), paiedAmmount:"0", dp:"", reste:mensualite2.toString(), validation:0}
liste.push(obj)
}
liste.forEach(element =>{
this.shared.addAll(element, 'payment').subscribe({
next: (data) => {
}, error: (err) => {
  swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
}
})
});






//end 10 row
          this.router.navigate(['/contrats']);
          swal('Success', '', 'success');

        }, error: (err) => {
          swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
        }
      })
    } else {
      const obj2 = {
        numero: numero, client: client['nom'] || this.model.client, article: article['nom'] || this.model.article, datecontrat: ddContra,
        qte: qte, nbrecheance: nbrecheance,
        montant: montant, avance: avance, premiereecheance: finalDate,
        commission_vendeur: commission_vendeur['nom'] || this.model.commission_vendeur, annuite2: annuite2, mensualite2: mensualite2,
        recouvreur: recouvreur['nom'] || this.model.recouvreur, chef: chef['nom'] || this.model.chef, comm: comm, statucontrat: statucontrat,
        remarque: remarque || "", active: "0", mensualite: annuite, id: this.type
      }
      // console.log(obj2);

      this.shared.UpdateAll(obj2, 'contrat', true, `/contrat/${obj2.numero}`);
    }

  }
  changeArt() {
    this.model = {
      ...this.model, qte: "1", montant: this.model.article.prix,
      avance: this.model.article.mavance, annuite: this.model.article.mensualite,
      nbrecheance: this.model.article.annuite, annuite2: this.model.article["2annuite"],
      mensualite2: this.model.article["2mensualite"]
    }
  }
  onSearchChange(data: any) {
    const qtee = Number(data)
    this.model = {
      ...this.model, qte: "1", montant: this.model.article.prix * qtee,
      avance: this.model.article.mavance * qtee, annuite: this.model.article.annuite,
      nbrecheance: this.model.article.mensualite * qtee, annuite2: this.model.article["2annuite"],
      mensualite2: this.model.article["2mensualite"] * qtee
    }
  }
  chek(avance: number, nbrmonth1: number, prixmonth1: number, nbrmonth2: number, prixmonth2: number, toutaleprix: number, qte: number) {
    const res = Number((((nbrmonth1) * prixmonth1) + (nbrmonth2 * prixmonth2)) + avance);
    if (res != toutaleprix) {
      this.check = true;
      this.hchek = false;
    }
    else {
      this.check = false;//alert
      this.hchek = true

    }
  }

  chek2(avance: number, nbrmonth1: number, prixmonth1: number, nbrmonth2: number, prixmonth2: number, toutaleprix: number, qte: number): boolean {
    let res = 0;
    res = Number((((nbrmonth1) * prixmonth1) + (nbrmonth2 * prixmonth2)) + avance);
    if (res != toutaleprix && res != 0) {
      this.check = true;
      return true
    }
    else {
      this.check = false;
      return false;
    }
  }
  async getListAgontRecouvreur() {
    await this.atherser.getAgontByType("Recouvreur").subscribe({
      next: (data) => {
        const donne: any = data;
        this.listRecouvreur = donne;
      }, error: (err) => {
        this.listRecouvreur = [];
      }
    })
  }
  async getListAgontChefGroupe() {
    await this.atherser.getAgontByType("Chef de groupe").subscribe({
      next: (data) => {
        const donne: any = data;
        this.listChefGroupe = donne;

      }, error: (err) => {
        this.listChefGroupe = [];
      }
    })
  }
  async getListAgontVendeurCommercial() {

    await this.atherser.getAgontByType("Vendeur Commercial").subscribe({
      next: (data) => {
        const donne: any = data;
        this.listVendeurCommercial = donne;

      }, error: (err) => {
        this.listVendeurCommercial = [];
      }
    })
  }
  async getInfoContraForUpdate() {
    await this.atherser.getOneContrat(this.type).subscribe({
      next: (data) => {
        const donne: any = data;
        this.objectInfo = donne;
        const date1: any = this.datepipe.transform(this.objectInfo.datecontrat, 'yyyy-MM-dd');

        let strDate = this.objectInfo.premiereecheance.toString();
        strDate = strDate.slice(strDate.indexOf(" ") + 1, strDate.length);
        const day = strDate.substr(0, strDate.indexOf(" "))
        strDate = strDate.slice(strDate.indexOf(" ") + 1, strDate.length);
        const month = strDate.substr(0, strDate.indexOf(" "))
        strDate = strDate.slice(strDate.indexOf(" ") + 1, strDate.length);
        const year = strDate;
        var tab: any = { 'janvier': '01', 'février': '02', 'mars': '03', 'avril': '04', 'mai': '05', 'juin': '06', 'juillet': '07', 'août': '08', 'septembre': '09', 'octobre': '10', 'novembre': '11', 'décembre': '12' };
        const datee3 = year + "-" + tab[month] + "-" + day;
        this.model.numero = this.objectInfo.numero
        this.model.client = this.objectInfo.client
        this.model.article = this.objectInfo.article
        this.model.qte = this.objectInfo.qte
        this.model.montant = this.objectInfo.montant
        this.model.avance = this.objectInfo.avance
        this.model.datecontrat = date1
        this.model.nbrecheance = this.objectInfo.nbrecheance
        this.model.annuite = this.objectInfo.mensualite
        this.model.annuite2 = this.objectInfo['2annuite']
        this.model.mensualite2 = this.objectInfo['2mensualite']
        this.model.premiereecheance = datee3
        this.model.commission_vendeur = this.objectInfo.commission_vendeur
        this.model.recouvreur = this.objectInfo.recouvreur
        this.model.chef = this.objectInfo.chef
        this.model.comm = this.objectInfo.comm
        this.model.statucontrat = this.objectInfo.statucontrat
        this.model.remarque = this.objectInfo.remarque || ""
      }, error: (err) => {
        this.objectInfo = [];
      }
    })
  }
}



