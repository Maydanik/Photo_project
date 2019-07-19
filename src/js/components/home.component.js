import img from '../../img/red_house.v1540203386.png';

export class HomeComponent {
    // constructor() {

    // }
    render() {
        return `
            <div class="home">Home :)</div>
            <img src="${img}">
        `;
    }

    async beforeRender() {
    
    }
}