import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { StoreService } from './services/store.service';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  public productos!: Array<Product>;

  
  constructor(private _service: StoreService, private loadingCtrl: LoadingController) {

  }

  ngOnInit(): void {
    //this.loadProducts();
    this.loadingData();

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

}
