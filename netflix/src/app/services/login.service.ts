import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    private user: any;
    private password: any;

    public setUser( user ) {
        this.user = user;
    }


    public setPassword( password ) {
        this.password = password;
    }

    public deleteUser() {
        this.user = '';
        this.password = '';
    }

    public isLogin(): Boolean {
        if (this.user && this.password !== '') {
            return true;
        } else {
            return false;
        }


    }

}
