// Método Tanque Classe A

function tanque() {
	// validação do valores de entrada
	if(document.getElementById("bor").value == "") {
		alert("Entre com o valor da bordadura!");
		return false;
	}

	if((document.getElementById("bor").value < 1) || (document.getElementById("bor").value > 1000)) {
		alert("Valor da bordadura deve ser entre 1m e 1000m.");
		return false;
	}

	if(document.getElementById("ur").value == "") {
		alert("Entre com o valor da umidade relativa!");
		return false;
	}

	if((document.getElementById("ur").value < 30) || (document.getElementById("vento").value > 84)) {
		alert("Valor da umidade relativa deve ser entre 30% e 84%.");
		return false;
	}

	if(document.getElementById("vento").value == "") {
		alert("Entre com o valor da velocidade do ventor!");
		return false;
	}

	if((document.getElementById("vento").value < 1) || (document.getElementById("vento").value > 8)) {
		alert("Valor da velocidade do vento deve ser entre 1m/s e 8m/s.");
		return false;
	}

	if(document.getElementById("eca").value == "") {
		alert("Entre com o valor do ECA!");
		return false;
	}

	// criação das variaveis iniciais
	var bor = parseFloat(document.getElementById("bor").value);
	var ur = parseFloat(document.getElementById("ur").value);
	var vento = parseFloat(document.getElementById("vento").value);
	var eca = parseFloat(document.getElementById("eca").value);

	// calculo do Coeficiente do Tanque
	var kp;
	kp = (0.108 - (0.0286 * vento) + (0.0422 * Math.log(bor) + (0.1434 * Math.log(ur)) - (0.000631 * (Math.pow(Math.log(bor)), 2) * Math.log(ur))));

	// calculo do Método Tanque Classe A
	var eto;
	eto = (kp * eca);

	document.getElementById("resultado").value = eto.toFixed(2);
}
