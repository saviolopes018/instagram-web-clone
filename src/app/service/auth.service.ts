import { Usuario } from '../model/usuario';
import * as firebase from 'firebase';

export class Auth{

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
                    })
            })
            .catch((error: Error) =>{
                console.log(error);
            })
    }
}