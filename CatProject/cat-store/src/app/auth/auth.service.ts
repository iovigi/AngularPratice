import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    token: string;

    constructor(private router:Router){

    }

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(()=>{
                this.router.navigate(['/signin']);
            })
            .catch(error => console.log(error));
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response => {
                this.router.navigate(['/']);
                firebase.auth().currentUser.getIdToken().then((token) => {
                    this.token = token;
                });
            })
            .catch(error => console.log(error));
    }

    getToken() {
        if (firebase.auth().currentUser == null) {
            return "";
        }

        firebase.auth().currentUser.getIdToken().then((token) => {
            this.token = token;
        });

        return this.token;
    }

    logout(){
        firebase.auth().signOut();
        this.token = null;
    }

    isAuthenticated(){
        return this.token != null;
    }
}