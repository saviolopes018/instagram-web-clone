import { Usuario } from '../model/usuario';
import * as firebase from 'firebase';

export class Auth{
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
        console.log('parametro:', email, senha);
        firebase.default.auth().signInWithEmailAndPassword(email, senha)
            .then((success: any) =>{
                console.log(success);
            })
            .catch((error: Error) =>{
                console.log(error);
            })
    }
}