import { UserService } from '../../services/user.service'

export class UserComponent {

    constructor() {

        this._userService = new UserService();

    }
    render() {
        return `
        <div class="wrap">
           Users information
        </div>
        `;
    }

    async beforeRender() {

        this._userService.get('https://mostlikedperson-api.herokuapp.com/api/public/users/get-info/' + localStorage.getItem('id'));
    }

    afterRender() {
        
    };
}

