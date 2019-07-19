import { AuthService } from '../../services/auth.service';

export class SignUpComponent {

    constructor() {
        this._signupService = new AuthService();
    }

   render() {
        return `
        <div class="wrap_signup">
            <h3>Registration form</h3>
            <h2>Enter your personal information</h2>
            <form name="registr_form" class="registr_form" novalidate>
                <input type="email" placeholder="name@example.com" name="email" class="input"><br>
                <input type="password" placeholder="password" name="password" class="input"><br>
                <input type="password" placeholder="confirm password" name="confirmPassword" class="input"><br>
                <input type="text" placeholder="nickname" name="nickname" class="input"><br>
                <input type="text" placeholder="first_name" name="first_name" class="input"><br>
                <input type="text" placeholder="last_name" name="last_name" class="input"><br>
                <input type="tel" placeholder="phone" name="phone" class="input"><br>
                <div>Gender_orientation</div>
                <input type="radio" name="gender_orientation" value="male" class="gender_input">Male
                <input type="radio" name="gender_orientation" value="female" class="gender_input">Female<br>
                <input type="text" placeholder="city" name="city" class="input"><br>
                <input type="text" placeholder="country" name="country" class="input"><br>
                <select name="date_of_birth_day">
                    <option>date_of_birth_day</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>
                <select name="date_of_birth_month">
                    <option>date_of_birth_month</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
                <select name="date_of_birth_year">
                    <option>date_of_birth_year</option>
                    <option value="1980">1980</option>
                    <option value="1981">1981</option>
                    <option value="1982">1982</option>
                    <option value="1983">1983</option>
                    <option value="1984">1984</option>
                    <option value="1985">1985</option>
                    <option value="1986">1986</option>
                    <option value="1987">1987</option>
                    <option value="1988">1988</option>
                    <option value="1989">1989</option>
                    <option value="1990">1990</option>
                    <option value="1991">1991</option>
                    <option value="1992">1992</option>
                    <option value="1993">1993</option>
                    <option value="1994">1994</option>
                    <option value="1995">1995</option>
                    <option value="1996">1996</option>
                    <option value="1997">1997</option>
                    <option value="1998">1998</option>
                    <option value="1999">1999</option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                </select><br>
                <button type="submit" class="btn submit">Login</button><br>
                <button type="reset" class="btn reset">Reset</button>
            </form>
        </div>
        `;
    }

    async beforeRender() {
    
    }

    afterRender() {

        document.forms['registr_form'].addEventListener('submit', (e) => {

            e.preventDefault();

            let data = {
                email: e.target.elements['email'].value || undefined,
                password: e.target.elements['password'].value,
                confirmPassword: e.target.elements['confirmPassword'].value,
                nickname: e.target.elements['nickname'].value,
                first_name: e.target.elements['first_name'].value,
                last_name: e.target.elements['last_name'].value,
                phone: e.target.elements['phone'].value,
                gender_orientation: e.target.elements['gender_orientation'].value,
                city: e.target.elements['city'].value,
                country: e.target.elements['country'].value,
                date_of_birth_day: e.target.elements['date_of_birth_day'].value,
                date_of_birth_month: e.target.elements['date_of_birth_month'].value,
                date_of_birth_year: e.target.elements['date_of_birth_year'].value,
                };
    
                console.log(data);
    
            if (!data.email || !data.password || !data.confirmPassword || !data.nickname || !data.first_name || !data.last_name || !data.phone || !data.gender_orientation || 
                !data.city || !data.country || !data.date_of_birth_day || !data.date_of_birth_month || !data.date_of_birth_year) {
                return;
            }

            this._signupService.post('https://mostlikedperson-api.herokuapp.com/api/public/auth/signup', data);
        });
    }
}