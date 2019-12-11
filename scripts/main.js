
let jwt = window.location.href.split('jwt')[1];

if (!jwt) {
    window.location.assign('/login');
}