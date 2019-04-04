import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from './../../services/productos.service';
import { IProductDetail } from './../../interfaces/productDetail.interface';
import { ok } from 'assert';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  public product : IProductDetail[] = [];
  public  restult : IProductDetail[] = [];

  constructor(public activatedRoute : ActivatedRoute, public productService : ProductosService) {
    this.activatedRoute.params.subscribe( param =>{ 
      
      var term = param['termino'].length > 0 ? param['termino'].toLowerCase() : null;
      this.productService.searchProduct(term);

    });
   }

  ngOnInit() {
  }


}
