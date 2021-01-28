import { Usuario } from '../model/usuario';
import * as firebase from 'firebase';

export class Auth{
    public cadastrarUsuario(usuario: Usuario): void {
        console.log('service:', usuario);

        firebase.default.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then((resposta: any) => {
                console.log(resposta);
            })
            .catch((error: Error) => {
                console.log(error);
            })
    }
}