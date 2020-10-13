const nick = document.getElementById('usu');
const pass = document.getElementById('pass');

const form = document.getElementById('form');

const alert = document.getElementById('alert');

var val = 0;
var cUser;

var users = JSON.parse(localStorage.getItem('users'));

form.addEventListener('submit', function (e) {
    e.preventDefault();
    for (var i = 0; i < users.length; i++){
        if (usu.value == users[i].usu && pass.value == users[i].pass) {
            val += 1;
            localStorage.setItem('userIndex', i);
        }
    }

    if (val === 1) {
        val = 0;
        window.location = "inicio.html";
    } else {
        form.reset();
        val = 0;
        alert.className = 'alert alert-warning';
        alert.style.display = 'block';
        alert.innerText = 'Usuario o contraseña incorrectos';
        setTimeout(function () { alert.style.display = 'none'; alert.className = ''; }, 2500);
    }
})
