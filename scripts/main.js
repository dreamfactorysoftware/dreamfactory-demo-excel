
let jwt = window.location.href.split('jwt=')[1];

function redirectToLogin() {
    window.location.assign('/login');
}

if (!jwt && config.useOkta == true) {
    redirectToLogin();
}
else {
    if (config.useOkta == true) {
        localStorage.setItem('jwt', jwt);
        getPayload(jwt);
    }
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
    if (config.useOkta == true) {
        document.getElementById('username').innerText = username.replace(config.identityPostFix, '');
    } else {
        document.getElementById('username').innerText = 'User';
    }
}

function logout() {
    redirectToLogin();
    localStorage.removeItem('jwt');
}
