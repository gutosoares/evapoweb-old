// Método Linacre

function linacre() {
	// válidação da váriaveis de entrada
	if(document.getElementById('tm').value == "") {
		alert("Entre com o valor da temperatura média.");
		return false;
	}

	if(document.getElementById('ur').value == "") {
		alert("Entre com o valor da umidade relativa.");
		return false;
	}

	if(document.getElementById('altura').value == "") {
		alert("Entre com o valor da altura.");
		return false;
	}

	if((document.getElementById('latitude-graus').value == "") || document.getElementById('latitude-min').value == "") {
		alert("Entre com os valores da latitude.");
		return false;
	}

	// criando as variaveis iniciais
	var tm = parseFloat(document.getElementById('tm').value);
	var ur = parseFloat(document.getElementById('ur').value);
	var h = parseFloat(document.getElementById('altura').value);
	var latGraus = parseFloat(document.getElementById('latitude-graus').value);
	var latMin = parseFloat(document.getElementById('latitude-min').value);

	// calculo da latitude
	var latitude;
	if(latGraus > 0) {
	    latitude = ((latGraus + (latMin)/60));
    }
    else {
        latitude = ((latGraus + (-latMin)/60));
    }

	// calculo da pressão de saturação de vapor
	var es;
	es = (0.6108 * (Math.exp ((17.27 * tm) / (237.3 + tm))) * 7.5);

	// calculo da variavel pressão atual de vapor
	var ea;
	ea = (es * 0.01 * ur);

	// calculo da temperatura do ponto de orvalho
	var to;
	to = (((237.3 * Math.log10(ea)) - 156.8) / (8.16 - (Math.log10(ea))));

	// calculo do Método de Linacre
	var eto = 0;
	eto = (((500 * (tm + (0.006 * h))) / (100 - latitude)) + (15 * (tm - to))) / (80 - tm);

	document.getElementById("resultado").value = (eto.toFixed(2) + " mm/dia");
}
