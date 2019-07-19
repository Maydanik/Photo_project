import { Routing } from './routing.service';

export class LoginService {
    
    constructor() {
        this._routting = new Routing();
    }    

    post(url, data) {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            let id = data.id;
            let token = data.token;
            localStorage.setItem('id', id);
            localStorage.setItem('token', token);
            this._routting.navigate(`/users/:${id}`, data);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    }