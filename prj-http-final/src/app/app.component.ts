import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp(
      {
        apiKey: "AIzaSyB1TfFJt1Sa4JhyGvw5eJv2S9g9lL4jW-U",
        authDomain: "ng-recipe-book-ce900.firebaseapp.com"
      }
    );
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
