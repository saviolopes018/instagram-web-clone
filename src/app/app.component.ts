import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'instagram-clone';

  ngOnInit(){
    var firebaseConfig = {
      apiKey: "AIzaSyCPJGMtR0EzpY-Dd0DhV6KC6lW2Sv-OF6s",
      authDomain: "instagram-clone-ed090.firebaseapp.com",
      projectId: "instagram-clone-ed090",
      storageBucket: "instagram-clone-ed090.appspot.com",
      messagingSenderId: "867746267083",
      appId: "1:867746267083:web:b6d40273b30b3291d2804e",
      measurementId: "G-KL216Q95SW"
    };

    firebase.initializeApp(firebaseConfig);
  }
}
