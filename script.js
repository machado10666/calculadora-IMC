document.getElementById("imcForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores do formulário
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    // Verifica se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores numéricos válidos!");
        return;
    }

    // Calcula o IMC
    const imc = calcularIMC(peso, altura);

    // Exibe o resultado
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = `Seu IMC é: ${imc} - ${classificarIMC(imc)}`;

    // Mostra o botão "Novo Cálculo"
    document.getElementById("novoCalculo").style.display = "block";
});

document.getElementById("novoCalculo").addEventListener("click", function () {
    // Reseta o formulário
    document.getElementById("imcForm").reset();
    // Limpa o resultado
    document.getElementById("resultado").textContent = "";
    // Esconde o botão "Novo Cálculo"
    this.style.display = "none";
});

function calcularIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2); // Calcula o IMC com duas casas decimais
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Magreza";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        return "Obesidade Grau I";
    } else if (imc >= 35 && imc < 39.9) {
        return "Obesidade Grau II";
    } else {
        return "Obesidade Grau III";
    }
}