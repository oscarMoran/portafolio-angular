import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IpageInformation } from '../interfaces/informatio.interface';

@Injectable({
  providedIn: 'root'
})
export class PageInformationService implements  OnInit {

  info : IpageInformation = {} ;
  loaded = false;
  equipo : any[] = [];
  constructor( private _http : HttpClient) { 
    this.getInfo();
    this.getEquipo();
  }

  private getInfo(){
    this._http.get('assets/data/data-page.json').subscribe ( response =>{ 
      this.loaded = true;
      this.info = response;
    });
  }

  private getEquipo(){
    this._http.get('https://angular-html-75781.firebaseio.com/equipo.json').subscribe(
      (response: any[]) => {
        this.equipo = response;
      });
  }

  ngOnInit() {

  }
}
