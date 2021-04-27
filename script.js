function cargarAño(){

    var option = document.createElement('option');
    var select = document.getElementById('anio');

    for(let step = 1900; step < 2021; step++){
        option.value = step;
        option.text = step;
        select.appendChild(option);
    }
}