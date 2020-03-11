var form = document.getElementById('form');
var campoCor = document.getElementById('color');

form.addEventListener('submit', function(e) {
    // alerta o valor do campo
    alert(campoCor.value);

    // impede o envio do form
    e.preventDefault();
});