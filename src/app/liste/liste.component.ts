import { Component, Input, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Product } from "../accueil/accueil.product.model";
import {AccueilComponent} from "../accueil/accueil.component";
import { AppComponent } from '../app.component';
@Component({
    selector: "app-liste",
    templateUrl: "./liste.component.html",
    styleUrls: ["./liste.component.css"]
})
export class ListeComponent implements OnInit{
    product:Product;
    productList:Product[];
    constructor(private http: HttpClient,private test:AccueilComponent,private appc:AppComponent){}
    async ngOnInit(): Promise<void> {
      console.log("zersfszfsdef");
      this.productList=[];
      //https://us-central1-projet-tuteure-42fc0.cloudfunctions.net/app/api/listes
      //
     const data = await this.http.get('http://localhost:3000/api/listes', {
        responseType: "json"
      }).toPromise();
      console.log(this.appc.idfamille);
     for(let key in data){
       if(data[key]['data']['idfamille']==this.appc.idfamille){
        this.test.getProductData(data[key]['data']['barcode']);
        this.productList.push(await Promise.resolve(this.test.getProductData(data[key]['data']['barcode'])));
        console.log(await (await Promise.resolve(this.test.getProductData(data[key]['data']['barcode']))).imageUrl);
        console.log("oui");
      }
     }
    }
}