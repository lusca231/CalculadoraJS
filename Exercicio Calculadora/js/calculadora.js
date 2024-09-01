function calcular(conta) {
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);
    var resultado = 0;


    if (isNaN(valor1) || isNaN(valor2)) {
        document.getElementById('resultado').innerText = 'Use apenas números';
        return;
    }

    if (conta == 'somar') {
        resultado = valor1 + valor2;

    } else if (conta == 'subtrair') {
        resultado = valor1 - valor2;

    } else if (conta == 'multiplicar') {
        resultado = valor1 * valor2;

    } else if (conta == 'dividir') {
        if (valor2 == 0) {
            document.getElementById('resultado').innerText = 'Não é possivel';
            return;
        }
        resultado = valor1 / valor2;
    }

    document.getElementById('resultado').innerText = resultado;
}

function limpar() {
    document.getElementById('valor1').value = '';
    document.getElementById('valor2').value = '';
    document.getElementById('resultado').innerText = '0';
}
