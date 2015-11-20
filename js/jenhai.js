// Método de Jensen-Haise

function jenhai() {
    // validação da variaveis de entrada
    if(document.getElementById("dia").value == "") {
        alert("Entre com o dia desejado.");
        return false;
    }

    if(document.getElementById("dia").value < 1 || (document.getElementById("dia").value > 31)) {
        alert("Valor inválido!");
        return false;
    }

    if(document.getElementById("mes").value == "") {
        alert("Entre com o mês desejado.");
        return false;
    }

    if(document.getElementById("mes").value == 2 && (document.getElementById("dia").value > 29)) {
        alert("O valor do dia informado para o mês de Fevereiro está incorreto.");
        return false;
    }

    if(document.getElementById("mes").value < 1 || (document.getElementById("mes").value > 12)) {
        alert("Valor inválido!");
        return false;
    }

    if(document.getElementById("ano").value == "") {
        alert("Entre com o ano desejado.");
        return false;
    }

    if(document.getElementById("temp1").value == "") {
        alert("Entre com o valor da temperatura as 9h00.");
        return false;
    }

    if(document.getElementById("temp2").value == "") {
        alert("Entre com o valor da temperatura as 15h00.")
    }

    if(document.getElementById("temp3").value == "") {
        alert("Entre com o valor da temperatura as 21h00.");
        return false;
    }

    if(document.getElementById("pAtm").value == "") {
        alert("Entre com o valor da pressão atmosférica em (kPa).");
        return false;
    }

    if(document.getElementById("latitude-graus").value == "") {
        alert("Entre com o valor da latitude em graus.");
        return false;
    }

    if(document.getElementById("latitude-min").value == "") {
        alert("Entre com o valor da latitude em minutos.");
        return false;
    }

    if(document.getElementById("brilhoSolar").value == "") {
        alert("Entre com o valor do brilho solar.");
        return false;
    }
