
let jwt = window.location.href.split('jwt=')[1];

function redirectToLogin() {
    window.location.assign('/login');
}

if (!jwt) {
    redirectToLogin();
}
else {
    localStorage.setItem('jwt', jwt);
    getPayload(jwt);
}


function getPayload(jwt) {
    try {
        let payload = JSON.parse(atob(jwt.split('.')[1]));
        getUserById(payload.user_id);
    }
    catch (e) {
        console.error(e);
        redirectToLogin();
    }
}

function getUserById(id) {
    fetch(`${config.userUrl}/${id}`, {
        dataType: 'json',
        headers: {
            "X-DreamFactory-Api-Key": config.apiKey
        },
    })
        .then(response => response.json())
        .then(data => {
            if (!data || !data.username) {
                redirectToLogin();
            }
            else {
                setUsername(data.username)
            }
        })
        .catch(error => console.error(error));
}

function setUsername(username) {
    document.getElementById('username').innerText = username.replace('+okta_sso', '');
}

function logout() {
    redirectToLogin();
    localStorage.removeItem('jwt');
}
