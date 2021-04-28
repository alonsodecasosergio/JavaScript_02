function cargarDatos(){
    cargarAnio();
    cargarNumeroDias();
}

function cargarAnio(){

    var select = document.getElementsByName("anio");

    for (var i = 1900; i < 2022; i++) {
        
        var option = document.createElement("option");
        option.innerHTML = i;
        select[0].appendChild(option);
    }    
}

function cargarNumeroDias(){

    var comboDia=document.getElementsByName("dia");

    var comboAnio=document.getElementsByName("anio")[0];
    var comboMes=document.getElementsByName("mes")[0];

    var numeroDias=calcularDiasMes(comboAnio.options[comboAnio.selectedIndex].value, comboMes.selectedIndex+1); 

    //VACIA EL COMBO PARA VOLVERLO A RELLENAR CON LOS DIAS
    var length = comboDia[0].options.length;
    for (i = length-1; i >= 0; i--) {
    comboDia[0].options[i] = null;
    }

    for (var i= 1; i <= numeroDias; i++) {

        var option = document.createElement("option");
        option.innerHTML = i;
        comboDia[0].appendChild(option);

    }

}

function calcularDiasMes(anio, mes) {

    var numeroDias = -1;

    switch (mes) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            numeroDias = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            numeroDias = 30;
            break;
        case 2:


            if ((anio % 4 == 0 && anio % 100 != 0) || (anio % 100 == 0 && anio % 400 == 0)) { //Con esto sé si es bisiesto o no
                numeroDias = 29;
            } else {
                numeroDias = 28;
            }
            break;

    }

    return numeroDias;
}

function validarDatos(){

    if(validarDNI() && validarCajas() && validarCheck()){
        alert("Los datos han sido enviados");
    }else{
        alert("Hay campos que no son correctos");
    }
}

function validarCheck(){

    var check = document.getElementById("cbox2").checked;

    if(check){

        return true;

    }else{
        alert("Marque la casilla de aceptación");
        return false;
    }
}

function validarDNI(){

    var dni = document.getElementById("NumDni").value;
    var letra = document.getElementById("LetraDni").value;

    var valoresAceptados = /^[0-9]+$/;

    if(dni.length == 8 && dni.match(valoresAceptados)){
        
        var result = dni % 23;
        var cadena = "TRWAGMYFPDXBNJZSQVHLCKET";
        var letraBuena = cadena.substring(result,result+1);

        if(letra === letraBuena){
            return true;
        }else{
            alert("La letra del DNI no es correcta");
            return false;
        }

    }else{
        alert("El DNI no es correcto");
        return false;
    }
}

function validarCajas(){

    var telefono = document.getElementById("telefono").value;
    var movil = document.getElementById("movil").value;
    var codigoPostal = document.getElementById("codigoPostal").value;

    var valoresAceptados = /^[0-9]+$/;

    if(telefono.length != 9 || !telefono.match(valoresAceptados)){

        return false;
    }

    if(movil.length != 9 || !movil.match(valoresAceptados)){

        return false;
    }

    if(codigoPostal.length != 5 || !codigoPostal.match(valoresAceptados)){

        return false;
    }

    return true;

}

