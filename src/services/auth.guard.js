import { Routing } from './routing.service';

export class AuthGuard {

    constructor() {

        this._routing = new Routing();
        
    }

    canActivate () {

        let token = localStorage.getItem('token');
        if( !token ) {
            this._routing.navigate('/login');
            return false;
        }
        return true;
    }
}