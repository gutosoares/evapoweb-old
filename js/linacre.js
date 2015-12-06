// Método Linacre

function linacre() {
	// válidação da váriaveis de entrada
	if(document.getElementById('tempMedia').value == "") {
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
	var tempMedia = parseFloat(document.getElementById('tempMedia').value);
	var ur = parseFloat(document.getElementById('ur').value);
	var h = parseFloat(document.getElementById('altura').value);
	var latGraus = parseFloat(document.getElementById('latitude-graus').value);
	var latMin = parseFloat(document.getElementById('latitude-min').value);

	// calculo da latitude
	var latitude;
	latitude = ((latGraus + (latMin)/60));

	// calculo da pressão de saturação de vapor
	var es;
	es = ((0.6108 * (Math.exp((17.27 * tempMedia) / (237.3 + tempMedia)))) * 7.5);

	// calculo da variavel pressão atual de vapor
	var ea;
	ea = (es * 0.01 * ur);

	// calculo da temperatura do ponto de orvalho
	var to;
	to = (((237.3 * Math.log10(ea)) - 156.8) / (8.16 - (Math.log10(ea))));

	// calculo do Método de Linacre
	var eto = 0;
	eto = (((500 * (tempMedia + (0.006 * h))) / (100 - latitude)) + (15 * (tempMedia - to))) / (80 - tempMedia);

	document.getElementById("resultado").value = (eto.toFixed(2) + " mm/dia");

	return false;
}
