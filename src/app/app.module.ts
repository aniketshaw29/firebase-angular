import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBoMIH8EBhDGvnG9-slfqSpqJOheWYSH6U",
      authDomain: "aniketcloud-6413a.firebaseapp.com",
      projectId: "aniketcloud-6413a",
      storageBucket: "aniketcloud-6413a.appspot.com",
      messagingSenderId: "667376291033",
      appId: "1:667376291033:web:896db0f4887a05422042c8"
    }),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
