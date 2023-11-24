import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public product!: Product;

  constructor(private _service: StoreService, private _acitveRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loadGamesById()
  }


  loadGamesById() {
    this._acitveRoute.params.subscribe((parametros: Params) => {
      var id = parametros['id'];
     
     
      console.log(id);
      this._service.getProductById(id).subscribe(response => {
        console.log(response);

        this.product = response;
      })
    })
    
  }
}
