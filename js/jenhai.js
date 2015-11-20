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

    // criando as variaveis iniciais
	var dia = parseFloat(document.getElementById('dia').value);
	var mes = parseFloat(document.getElementById('mes').value);
	var ano = parseFloat(document.getElementById('ano').value);
	var temp1 = parseFloat(document.getElementById('temp1').value);
	var temp2 = parseFloat(document.getElementById('temp2').value);
	var temp3 = parseFloat(document.getElementById('temp3').value);
    var pAtm = parseFloat(document.getElementById('pAtm').value);
    var latGraus = parseFloat(document.getElementById('latitude-graus').value);
	var latMin = parseFloat(document.getElementById('latitude-min').value);
	var brilhoSolar = parseFloat(document.getElementById('brilhoSolar').value);

    var calendarioMes = {
        janeiro:1,
        fevereiro:2,
        marco:3,
        abril:4,
        maio:5,
        junho:6,
        julho:7,
        agosto:8,
        setembro:9,
        outubro:10,
        novembro:11,
        dezembro:12
    };

    var calendarioDia = {
        janeiro:31,
        fevereiro:28,
        marco:31,
        abril:30,
        maio:31,
        junho:30,
        julho:31,
        agosto:31,
        setembro:30,
        outubro:31,
        novembro:30,
        dezembro:31
    };

    // calculo do dia Juliano
    var diaJuliano = 0;
    if ((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0))) {
        if(mes == calendarioMes.janeiro) {
            diaJuliano = dia;
        }
        if(mes == calendarioMes.fevereiro) {
            diaJuliano = (calendarioDia.janeiro + dia);
        }
        if(mes == calendarioMes.marco) {
            diaJuliano = (calendarioDia.janeiro + (calendarioDia.fevereiro + 1) + dia);
        }
        if(mes == calendarioMes.abril) {
            diaJuliano = (calendarioDia.janeiro + (calendarioDia.fevereiro + 1) + calendarioDia.marco + dia);
        }
        if(mes == calendarioMes.maio) {
            diaJuliano = (calendarioDia.janeiro + (calendarioDia.fevereiro + 1) + calendarioDia.marco + calendarioDia.abril + dia);
        }
        if(mes == calendarioMes.junho) {
            diaJuliano = (calendarioDia.janeiro + (calendarioDia.fevereiro + 1) + calendarioDia.marco + calendarioDia.abril + calendarioDia.maio + dia);
        }
        if(mes == calendarioMes.julho) {
            diaJuliano = (calendarioDia.janeiro + (calendarioDia.fevereiro + 1) + calendarioDia.marco + calendarioDia.abril + calendarioDia.maio + calendarioDia.junho + dia);
        }
        if(mes == calendarioMes.agosto) {
            diaJuliano = (calendarioDia.janeiro + (calendarioDia.fevereiro + 1) + calendarioDia.marco + calendarioDia.abril + calendarioDia.maio + calendarioDia.junho + calendarioDia.julho + dia);
        }
        if(mes == calendarioMes.setembro) {
            diaJuliano = (calendarioDia.janeiro + (calendarioDia.fevereiro + 1) + calendarioDia.marco + calendarioDia.abril + calendarioDia.maio + calendarioDia.junho + calendarioDia.julho + calendarioDia.agosto + dia);
        }
        if(mes == calendarioMes.outubro) {
            diaJuliano = (calendarioDia.janeiro + (calendarioDia.fevereiro + 1) + calendarioDia.marco + calendarioDia.abril + calendarioDia.maio + calendarioDia.junho + calendarioDia.julho + calendarioDia.agosto + calendarioDia.setembro + dia);
        }
        if(mes == calendarioMes.novembro) {
            diaJuliano = (calendarioDia.janeiro + (calendarioDia.fevereiro + 1) + calendarioDia.marco + calendarioDia.abril + calendarioDia.maio + calendarioDia.junho + calendarioDia.julho + calendarioDia.agosto + calendarioDia.setembro + calendarioDia.outubro + dia);
        }
        if(mes == calendarioMes.dezembro) {
            diaJuliano = (calendarioDia.janeiro + (calendarioDia.fevereiro + 1) + calendarioDia.marco + calendarioDia.abril + calendarioDia.maio + calendarioDia.junho + calendarioDia.julho + calendarioDia.agosto + calendarioDia.setembro + calendarioDia.outubro + calendarioDia.novembro + dia);
        }
    }
    else {
        if(mes == calendarioMes.janeiro) {
            diaJuliano = dia;
        }
        if(mes == calendarioMes.fevereiro) {
            diaJuliano = (calendarioDia.janeiro + dia);
        }
        if(mes == calendarioMes.marco) {
            diaJuliano = (calendarioDia.janeiro + calendarioDia.fevereiro + dia);
        }
        if(mes == calendarioMes.abril) {
            diaJuliano = (calendarioDia.janeiro + calendarioDia.fevereiro + calendarioDia.marco + dia);
        }
        if(mes == calendarioMes.maio) {
            diaJuliano = (calendarioDia.janeiro + calendarioDia.fevereiro + calendarioDia.marco + calendarioDia.abril + dia);
        }
        if(mes == calendarioMes.junho) {
            diaJuliano = (calendarioDia.janeiro + calendarioDia.fevereiro + calendarioDia.marco + calendarioDia.abril + calendarioDia.maio + dia);
        }
        if(mes == calendarioMes.julho) {
            diaJuliano = (calendarioDia.janeiro + calendarioDia.fevereiro + calendarioDia.marco + calendarioDia.abril + calendarioDia.maio + calendarioDia.junho + dia);
        }
        if(mes == calendarioMes.agosto) {
            diaJuliano = (calendarioDia.janeiro + calendarioDia.fevereiro + calendarioDia.marco + calendarioDia.abril + calendarioDia.maio + calendarioDia.junho + calendarioDia.julho + dia);
        }
        if(mes == calendarioMes.setembro) {
            diaJuliano = (calendarioDia.janeiro + calendarioDia.fevereiro + calendarioDia.marco + calendarioDia.abril + calendarioDia.maio + calendarioDia.junho + calendarioDia.julho + calendarioDia.agosto + dia);
        }
        if(mes == calendarioMes.outubro) {
            diaJuliano = (calendarioDia.janeiro + calendarioDia.fevereiro + calendarioDia.marco + calendarioDia.abril + calendarioDia.maio + calendarioDia.junho + calendarioDia.julho + calendarioDia.agosto + calendarioDia.setembro + dia);
        }
        if(mes == calendarioMes.novembro) {
            diaJuliano = (calendarioDia.janeiro + calendarioDia.fevereiro + calendarioDia.marco + calendarioDia.abril + calendarioDia.maio + calendarioDia.junho + calendarioDia.julho + calendarioDia.agosto + calendarioDia.setembro + calendarioDia.outubro + dia);
        }
        if(mes == calendarioMes.dezembro) {
            diaJuliano = (calendarioDia.janeiro + calendarioDia.fevereiro + calendarioDia.marco + calendarioDia.abril + calendarioDia.maio + calendarioDia.junho + calendarioDia.julho + calendarioDia.agosto + calendarioDia.setembro + calendarioDia.outubro + calendarioDia.novembro + dia);
        }
    }

    // calculo da temperatura media
    var tempMedia;
    tempMedia = ((temp1 + temp2 + (2 * temp3)) / 4);


}
