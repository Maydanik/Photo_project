import '../css/styles.css';

import { HomeComponent } from './components/home.component';
import { NotFoundComponent } from './components/notfound.component';
import { LoginComponent } from './components/login.component';
import { SignUpComponent } from './components/signup.component';
import { UserComponent} from './components/user.component';
import { ActiveRoute } from '../services/active.route.service';
import { AuthGuard } from '../services/auth.guard';

const activeRoute = new ActiveRoute();
const authGuard = new AuthGuard();

const routes = {
    '/': 
        {component: new HomeComponent(),
        guard: [authGuard]},
    '/login': 
        {component: new LoginComponent()},
    '/users/:id': 
        {component: new UserComponent(),
        guard: [authGuard]},
    '**': 
        {component: new NotFoundComponent()},
    '/signup': 
        {component: new SignUpComponent()},
};

const router = async () => {
    const container = document.querySelector('app-container');
    const request = activeRoute.parseRequestURL();
    const url = (request.resourse ? '/' + request.resourse : '/') + (request.id ? '/:id' : '');

    const component = routes[url] ? routes[url]['component'] : routes['**']['component'];  
    const guards = routes[url] ? routes[url]['guard'] : null; 
 
    if (guards) { 
      const guardState = guards.every((item) => item.canActivate()); 
      if (!guardState) return; 
    } 
     
    await component.beforeRender(); 
    container.innerHTML = component.render(); 
    component.afterRender();
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);