import { LoginService } from '../../services/login.service';

export class LoginComponent {

    constructor() {

        this._loginService = new LoginService();
        
    }
    
    render() {
        return `
        <div class="wrap_login">
            <h3>Login to Social</h3>
            <h2>Enter your e-mail adress & password to login to your Social account</h2>
            <form class="login_form" name="login_form">
            <input type="email" name="email" placeholder="name@example.com" class="input"><br>
            <input type="password" name="password" placeholder="password" class="input"><br>
            <button type="submit" class="btn submit">Login</button><br>
            <button type="reset" class="btn reset">Reset</button>
            </form>
        </div>
        `;
    }

    async beforeRender() {
    
    }

    afterRender() {

        document.forms['login_form'].addEventListener('submit', (e) => {

            e.preventDefault();

            let data = {
            email: e.target.elements['email'].value,
            password: e.target.elements['password'].value,
            };

            this._loginService.post('https://mostlikedperson-api.herokuapp.com/api/public/auth/login', data);
        });
    }
}