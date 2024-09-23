let listaNombresGastos = [];
let listaValoresGastos = [];
let indexEdicion = -1;

function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;

    if (indexEdicion === -1) {
        listaNombresGastos.push(nombreGasto);
                listaValoresGastos.push(valorGasto);
            } else {
                listaNombresGastos[indexEdicion] = nombreGasto;
                listaValoresGastos[indexEdicion] = valorGasto;
                indexEdicion = -1; 
            }

            actualizarListaGastos();
        }

        function actualizarListaGastos() {
            const listaElementos = document.getElementById('listaDeGastos');
            const totalElementos = document.getElementById('totalGastos');
            const mensajeAtencion = document.getElementById('mensajeAtencion');
            let hmtlLista = '';
            let totalGastos = 0;

            listaNombresGastos.forEach((elemento, posicion) => {
                const valorGasto = Number(listaValoresGastos[posicion]);
                hmtlLista += `
                    <li>
                        ${elemento} - USD ${valorGasto.toFixed(2)} 
                        <button onclick="eliminarGastos(${posicion});">Eliminar</button>
                        <button onclick="editarGastos(${posicion});">Modificar</button>
                    </li>`;
                totalGastos += valorGasto;
            });

            listaElementos.innerHTML = hmtlLista;
            totalElementos.innerHTML = totalGastos.toFixed(2);
            limpiar();
            const gastosMayores = listaValoresGastos.filter(valor => Number(valor) > 150);
            if (gastosMayores.length > 0) {
                mensajeAtencion.innerHTML = '¡Atención! Hay gastos mayores a USD 150.';
            } else {
                mensajeAtencion.innerHTML = ''; 
            }
        }

        function limpiar() {
            document.getElementById('nombreGasto').value = '';
            document.getElementById('valorGasto').value = '';
        }

        function eliminarGastos(posicion) {
            listaNombresGastos.splice(posicion, 1);
            listaValoresGastos.splice(posicion, 1);
            actualizarListaGastos();
        }

        function editarGastos(posicion) {
            indexEdicion = posicion; 
            document.getElementById('nombreGasto').value = listaNombresGastos[posicion];
            document.getElementById('valorGasto').value = listaValoresGastos[posicion];
        }