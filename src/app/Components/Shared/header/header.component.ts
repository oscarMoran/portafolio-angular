import { Component, OnInit } from '@angular/core';
import { PageInformationService } from '../../../services/page-information.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(public infoService : PageInformationService) { }

  ngOnInit() {
  }

}
