import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import 'firebase/auth';
import 'firebase/firestore';
import { AuthGuard } from './auth.guard';

import firebase from 'firebase/compat/app';
import 'firebase/auth';
@Component({
    selector: 'auth-from',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent {
    phoneNumber: string;
    verificationCode: string;
    reCaptchaVerifier!: any;
    user: any;

    constructor(public auth: AngularFireAuth, private authGuard: AuthGuard, private router: Router) { }

    getOTP() {
        this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier(
            'sign-in-button',
            {
                size: 'invisible',
                'callback': (response) => {
                    // reCAPTCHA solved, allow signInWithPhoneNumber.
                    onSignInSubmit();
                }
            }
        );
        console.log(this.reCaptchaVerifier);
        firebase.auth()
            .signInWithPhoneNumber(this.phoneNumber, this.reCaptchaVerifier)
            .then((confirmationResult) => {
                localStorage.setItem(
                    'verificationId',
                    JSON.stringify(confirmationResult.verificationId)
                );
                this.authGuard.authenticate();
            })
            .catch((error) => {
                console.log(error);
                alert(error.message);
            });
    }

}