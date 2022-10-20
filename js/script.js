var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

function containsNumbers(str) {
    return /\d/.test(str) || format.test(str);

  }
  
  
 function onlyLettersAndSpaces(str) {
  return /^[A-Za-z\s]*$/.test(str);
}
var submit = document.getElementById("submit");

function validaC() {
    
    var cognome = document.getElementById("cognome");

    if(containsNumbers(cognome.value) && !onlyLettersAndSpaces(cognome.value)){
        submit.classList.add("hidden");
        cognome.classList.add("ERROR");
    }else {
        cognome.classList.remove("ERROR");
        submit.classList.remove("hidden");
    }

}

function validaN(){
	
    var nome = document.querySelector("input#nome");
    
    if(containsNumbers(nome.value) && !onlyLettersAndSpaces(nome.value)){
        submit.classList.add("hidden");
        nome.classList.add("ERROR");
    }else {
        nome.classList.remove("ERROR");
        submit.classList.remove("hidden");
    }
}

function controllotitolo() {
    var select = document.getElementById("titolodistudio");
    var voto = document.getElementById("voto");

    if(select.value.includes("Diploma")){
        voto.max = 100;
    }

    if(select.value.includes("Laurea")){
        voto.max = 110;
    }

}





function successo() {
    if (localStorage.getItem("inserimento") ==  1 ){
        Swal.fire(
            'Ottimo Lavoro!',
            'Hai fatto l\'inserimento',
            'success'
          )
          localStorage.setItem("inserimento", 0);
    }
}



function legenda(){
	Swal.fire(
  		'Legenda Colori',
  	
  		'<ul style="text-align: left; list-style-type: none; margin-left: 50px;">' +
  		'<li><span class="dot" id="esitoPalla" style="background-color: green;"></span> Idoneo' +
  		'<span class="dot" id="esitoPalla" style="background-color: red; margin-left:100px;"></span> NON Idoneo </li>'+
        '<li><span class="dot" id="esitoPalla" style="background-color: yellow"></span> Da Ricontattare'+
        '<span class="dot" id="esitoPalla" style="background-color: blue; margin-left:30px;"></span> In Attesa </li>'+
        '</ul>',
        
  		'question'
	)
}


function filtraEsito(){
	var selettore = document.getElementById("esitoSelezione");
	
	if(selettore.value == ""){
		window.open("Select", "_self");	
	}else if(selettore.value == "Idoneo"){
		window.open("Select?esito=Idoneo", "_self");
	}else if(selettore.value == "Non Idoneo"){
		window.open("Select?esito=NonIdoneo", "_self");
	}else if(selettore.value == "In Attesa"){
		window.open("Select?esito=InAttesa", "_self");
	}else if(selettore.value == "Da ricontattare"){
		window.open("Select?esito=DaRicontattare", "_self");
	}
}
