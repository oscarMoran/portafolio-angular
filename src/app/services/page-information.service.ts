import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IpageInformation } from '../interfaces/informatio.interface';

@Injectable({
  providedIn: 'root'
})
export class PageInformationService implements  OnInit {

  info : IpageInformation = {} ;
  loaded = false;
  constructor( public _http : HttpClient) { 
    this._http.get('assets/data/data-page.json').subscribe ( response =>{ 
      this.loaded = true;
      this.info = response;
      return this.info;
    });
  }

  ngOnInit() {

  }
}
