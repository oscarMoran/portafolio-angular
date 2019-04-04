import { Component, OnInit } from '@angular/core';
import { PageInformationService } from '../../../services/page-information.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(public infoService : PageInformationService, private router : Router) { }

  ngOnInit() {
  }

  SearchProduct(termino :string){
    this.router.navigate(['/search', termino]);

  }
}
