import { Usuario } from '../model/usuario';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class Auth{

    constructor(
        private router: Router
    ){}

    public token_id: string;
    public cadastrarUsuario(usuario: Usuario): Promise<any> {

        return firebase.default.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then((resposta: any) => {
                delete usuario.senha;
                firebase.default.database().ref(`usuario_detalhe/${btoa(usuario.email)}`)
                    .set(usuario)
            })
            .catch((error: Error) => {
                console.log(error);
            })
    }
    public autenticar(email: string, senha: string): void{
        firebase.default.auth().signInWithEmailAndPassword(email, senha)
            .then((success: any) =>{
                firebase.default.auth().currentUser.getIdToken()
                    .then((idToken: string) => {
                        this.token_id = idToken;
                        this.router.navigate(['/home'])
                    })
            })
            .catch((error: Error) =>{
                console.log(error);
            })
    }
}