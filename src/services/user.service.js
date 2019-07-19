export class UserService {

    get(url) {
        fetch(url, {
            method: 'GET',
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
}    
