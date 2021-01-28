import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { state, style, transition, trigger, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('animacao-login', [
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado', [
        style({opacity: 0, transform: 'translate(30px, 0)'}),
        animate('1s ease-in-out')
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {

  public estadoLogin: string = 'criado';
  @Output() public exibirPainel: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  exibirCadastro(): void {
    this.exibirPainel.emit(true);
  }

}
