import { Component, OnInit } from '@angular/core';
import { PageInformationService } from '../../../services/page-information.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {
  public currentAnio : any;
  constructor(public infoService : PageInformationService) {
    this.currentAnio = new Date();
   }

  ngOnInit() {
  }

}
