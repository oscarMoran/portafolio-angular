import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {
  public currentAnio : any;
  constructor() {
    this.currentAnio = new Date();
   }

  ngOnInit() {
  }

}
