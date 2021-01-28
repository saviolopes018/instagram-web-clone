import { Component, OnInit } from '@angular/core';
import { state, style, transition, trigger, animate } from '@angular/animations';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [
    trigger('animacao-banner', [
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado', [
        style({opacity: 0, transform: 'translate(-30px, 0)'}),
        animate('1s ease-in-out')
      ])
    ])
  ]
})
export class AcessoComponent implements OnInit {

  public estadoBanner: string = 'criado';
  public cadastroOuLogin: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  exibirPainel(event: boolean): void {
    if(event){
      this.cadastroOuLogin = event;
    }else{
      this.cadastroOuLogin = event;
    }
  }

}
