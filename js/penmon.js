// Método de Penman-Monteith

function penmon() {
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
        alert("Entre com o valor da temperatura as 21h00.");
        return false;
    }

    if(document.getElementById("tempMax").value == "") {
        alert("Entre com o valor da temperatura máxima.");
        return false;
    }

    if(document.getElementById("tempMin").value == "") {
        alert("Entre com o valor da temperatura mínima.");
        return false;
    }

    if(document.getElementById("pAtm").value == "") {
        alert("Entre com o valor da pressão atmosférica em (kPa).");
        return false;
    }

    if(document.getElementById("velVento").value == "") {
        alert("Entre com o valor da velocidade do vento em (m/s).");
        return false;
    }

    if(document.getElementById("ur1").value == "") {
        alert("Entre com o valor da umidade relativa ás 9h00.");
        return false;
    }

    if(document.getElementById("ur2").value == "") {
        alert("Entre com o valor da umidade relativa ás 15h00.");
        return false;
    }

    if(document.getElementById("ur3").value == "") {
        alert("Entre com o valor da umidade relativa ás 21h00.");
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
	var tempMax = parseFloat(document.getElementById('tempMax').value);
	var tempMin = parseFloat(document.getElementById('tempMin').value);
	var pAtm = parseFloat(document.getElementById('pAtm').value);
	var velVento = parseFloat(document.getElementById('velVento').value);
	var ur1 = parseFloat(document.getElementById('ur1').value);
	var ur2 = parseFloat(document.getElementById('ur2').value);
	var ur3 = parseFloat(document.getElementById('ur3').value);
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
    tempMedia = ((temp1 + tempMax + tempMin + (2 * temp2)) / 5);

    // calculo da pressão de saturação
    var es;
    es = (0.6108 * (Math.exp(((17.27 * tempMedia) / (237.3 + tempMedia)))));

    // calculo da declividade da curva de pressão de saturação
    var decPreSat;
    decPreSat = ((4098 * es) / (Math.pow((tempMedia + 237.3), 2)));

    // calculo do coeficiente psicrométrico
    var coePis;
    coePis = (0.0016286 * (pAtm / 2.45));

    // calculo do coeficiente psicrométrico modificado
    var pisMod;
    pisMod = (coePis * (1 + (0.33 * velVento)));

    // calculo da umidade relativa media
    var urMedia;
    urMedia = ((ur1 + ur2 + (2 * ur3)) / 4);

    // calculo da pressão atual de vapor d'água
    var ea;
    ea = ((es * urMedia) / 100);

    // calculo da declinação solar
    var decSolar;
    if (((((ano % 4) == 0) && (ano % 100) != 0) || (ano % 400)==0)) {
        decSolar = (0.4093 * (Math.sin((((2 * Math.PI) / 366) * diaJuliano) - 1.405)));
    }
    else {
        decSolar = (0.4093 * (Math.sin((((2 * Math.PI) / 365) * diaJuliano) - 1.405)));
    }

    // calculo da latitude
	var latitude;
    if(latGraus > 0) {
	    latitude = ((latGraus + (latMin)/60) * (Math.PI / 180));
    }
    else {
        latitude = ((latGraus + (-latMin)/60) * (Math.PI / 180));
    }

    // calculo do angulo do nascer do sol
    var ws;
    ws = Math.acos((-Math.tan(latitude)) * (Math.tan(decSolar)));

    // calculo da duração do dia
    var N;
    N = ((24 / Math.PI) * ws);

    // calculo distancia relativa Terra-Sol
    var dr;
    if (((((ano % 4) == 0) && (ano % 100) != 0) || (ano % 400)==0)) {
        dr = (1 + (0.033 * (Math.cos(((2 * Math.PI) / 366) * diaJuliano))));
    }
    else {
        dr = (1 + (0.033 * (Math.cos(((2 * Math.PI) / 365) * diaJuliano))));
    }

    // calculo da radiação no topo da atmosfera
    var ra;
    ra = (37.586 * (dr * (ws * Math.sin(latitude) * Math.sin(decSolar)) + (Math.cos(latitude) * Math.cos(decSolar) * Math.sin(ws))));

    // calculo  da rediação solar incidente
    var rs;
    rs = ((0.27 + (0.52 * (brilhoSolar / N))) * ra);

    // calculo do saldo de radiação de ondas curtas
    var boc;
    boc = ((1 - 0.23) * rs);

    // caculo balanço de ondas longas
    var tempMaxK = (tempMax + 273);
    var tempMinK = (tempMin + 273);

    var bol;
    bol = -(((0.9 * brilhoSolar / N) + 0.1) * (0.34 - (0.14 * Math.sqrt(ea))) * (0.000000004903 * ((Math.pow(tempMaxK, 4)) + (Math.pow(tempMinK, 4))) * 0.5));

    var saldoRadiacao;
    saldoRadiacao = (boc + bol);

    console.log("tempMedia", tempMedia);
    console.log("es", es);
    console.log("decPreSat", decPreSat);
    console.log("coePis", coePis);
    console.log("pisMod", pisMod);
    console.log("urMedia", urMedia);
    console.log("ea", ea);
    console.log("decSolar", decSolar);
    console.log("dia juliano", diaJuliano);
    console.log("ws", ws);
    console.log("N", N);
    console.log("dr", dr);
    console.log("latitude", latitude);
    console.log("ra", ra);
    console.log("1", (ws * Math.sin(latitude) * Math.sin(decSolar)));
    console.log("2", (Math.cos(latitude) * Math.cos(decSolar) * Math.sin(ws)));
    console.log("rs", rs);
    console.log("boc", boc);
    console.log("bol", bol);
    console.log("saldoRadiacao", saldoRadiacao);

    return false;

}
