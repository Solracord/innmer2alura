let listaNombresGastos = [];
let listaValoresGastos = [];

function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;

    console.log(nombreGasto);
    console.log(valorGasto);
    
    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);

    console.log(listaNombresGastos);
    console.log(listaValoresGastos);
    //alert('Click de usuario');
    actualizarListaGastos();
}
function actualizarListaGastos(){
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let hmtlLista = '';
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValoresGastos [posicion]);
        hmtlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)} 
         <button onclick="eliminarGastos(${posicion});">Eliminar</button>
</li>`;

        totalGastos += Number(valorGasto);
    });
    listaElementos.innerHTML = hmtlLista;
    totalElementos.innerHTML =totalGastos.toFixed(2);
    limpiar();
}
function limpiar(){
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value ='';
}
function eliminarGastos(posicion) {
    listaNombresGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    actualizarListaGastos();
}