function simulador(){
    const contPre = document.getElementById('pre-simulation');
    const contPost = document.getElementById('post-simulation');
    let cNombres = document.getElementById('nombres').value;
    let cTelefono = document.getElementById('telefono').value;
    let cEmail = document.getElementById('email').value;
    let cMonto = document.getElementById('monto').value;

    contPost.classList.remove('disabled');
    contPre.classList.add('disabled');
}

document.addEventListener("DOMContentLoaded", function (){
    document.getElementById('calcular').addEventListener('click',simulador);
})