const form = document.getElementById('form-comparador');
const valorNumero1 = document.getElementById('primeiroValor');
const valorNumero2 = document.getElementById('segundoValor');

function validaNumero(valorNumero1, valorNumero2) {
    return valorNumero1 < valorNumero2;
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validaNumero(valorNumero1, valorNumero2)) {
        alert("O primeiro valor é menor que o segundo.");
    } else {
        alert("O primeiro valor não é menor que o segundo.");
    }
});
