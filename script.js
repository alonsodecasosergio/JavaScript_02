function cargarAnio(){

    var select = document.getElementsByName("anio");

    for (var i = 1900; i < 2022; i++) {
        
        var option = document.createElement("option");
        option.innerHTML = i;
        select[0].appendChild(option);
    }    
}