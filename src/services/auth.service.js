 export class AuthService {

    post(url, data) {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((response) => response.json())
        .catch((err) => console.log(err));
     }
    }
