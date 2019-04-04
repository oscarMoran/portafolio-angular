import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../../services/productos.service';
import { IProductDetail } from '../../../interfaces/productDetail.interface';

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html',
  styles: []
})
export class PortafolioItemComponent implements OnInit {

  wholeProduct : IProductDetail;
  productId : string;

  constructor(private route : ActivatedRoute, public  productService : ProductosService) {
    this.route.params.subscribe(
      (res) => {
        this.productService.getProductById(res['productId'])
        .subscribe(
          (productResponse: IProductDetail) =>{
            this.productId = res['productId'];
            this.wholeProduct = productResponse;
          }
        );
      }
    );
   }

  ngOnInit() {
  }

}
