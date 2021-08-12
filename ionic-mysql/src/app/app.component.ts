import { Component } from '@angular/core';
import { Platform,NavController } from '@ionic/angular';
import { StatusBar } from '@capacitor/status-bar';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    // private platform: Platform,
    // private storage: Storage,
    // public navctrl: NavController
  ) {
   // this.initializeApp();
  }

  // initializeApp(){
  //   this.platform.ready().then(()=>{
  //   });
    // this.storage.get('storage_session').then((res)=>{
    //   if(res==null){
    //     this.navctrl.navigateRoot('/home');
    //   }
    //   else{
    //     this.navctrl.navigateRoot('/login')
    //   }
    // });
  //}
}
