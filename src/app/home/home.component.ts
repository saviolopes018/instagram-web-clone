import { Component, OnInit } from '@angular/core';
import { Auth } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private auth: Auth
  ) { }

  ngOnInit(): void {
  }

  logout():void {
    this.auth.logout();
  }

}
