import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { state, style, transition, trigger, animate } from '@angular/animations';
import { FormGroup, FormControl } from '@angular/forms';
import { Usuario } from '../../model/usuario';
import { Auth } from '../../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  animations: [
    trigger('animacao-cadastro', [
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado', [
        style({opacity: 0, transform: 'translate(50px, 0)'}),
        animate('1s ease-in-out')
      ])
    ])
  ]
})
export class CadastroComponent implements OnInit {

  public estadoCadastro: string = 'criado';
  @Output() public exibirPainel: EventEmitter<boolean> = new EventEmitter();

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'nome_completo': new FormControl(null),
    'nome_usuario': new FormControl(null),
    'senha': new FormControl(null)
  });

  constructor(
    private auth: Auth
  ) { }

  ngOnInit(): void {
  }

  exibirLogin(): void{
    this.exibirPainel.emit(false);
  }

  cadastrarUsuario(): void {
    let usuario: Usuario = new Usuario(
      this.formulario.value.email,
      this.formulario.value.nome_completo,
      this.formulario.value.nome_usuario,
      this.formulario.value.senha
    );

    this.auth.cadastrarUsuario(usuario);
  }

}
