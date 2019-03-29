import { Component, OnInit } from '@angular/core';
import { PageInformationService } from '../../../services/page-information.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {
  constructor(public infoService : PageInformationService) { }

  ngOnInit() {
  }

}
