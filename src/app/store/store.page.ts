import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { StoreService } from '../services/store.service';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  public productos!: Array<Product>;
  public producto!: Product;

  constructor(private _service: StoreService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadingData();
    this.loadOnModal();
  }

  async loadingData(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: "Cargando...",
      spinner: "bubbles",
      mode: "ios",
      duration: 2000
    }) 
    loading.present();
    this._service.getProducts().subscribe(response =>{
      loading.dismiss();
      this.productos = response;
      event?.target.complete();
    });
  }

  // loadProducts(): void {
  //   this._service.getProducts().subscribe(response => {
  //     console.log(response);
  //     this.productos = response;
  //   })
  // }

  loadOnModal(): void {
    this._service.getProducts().subscribe(response => {
      console.log(response);
      this.producto = response;

    })
  }
}
