const formulario = document.getElementById('formulario-elemento');
            const input = document.getElementById('nuevoElemento');
            const lista = document.getElementById('lista');
            const listaVacia = document.getElementById('lista-vacia');
            const contador = document.getElementById('contador');
            const mensaje = document.getElementById('mensaje');

            const mostrarMensaje = texto => {
                mensaje.textContent = texto;
                mensaje.classList.remove('d-none');
            };

            const actualizarEstado = () => {
                const cantidad = lista.children.length;
                listaVacia.classList.toggle('d-none', cantidad > 0);
                contador.textContent = `${cantidad} ${cantidad === 1 ? 'elemento' : 'elementos'}`;
            };

            const eliminarElemento = elemento => {
                elemento.remove();
                actualizarEstado();
            };

            const agregarElemento = () => {
                const texto = input.value.trim();

                if (texto === '') {
                    mostrarMensaje('Escribe algo para agregar a la lista.');
                    input.focus();
                    return;
                }

                const elemento = document.createElement('li');
                elemento.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'gap-3');

                const textoNodo = document.createElement('span');
                textoNodo.textContent = texto;

                const botonEliminar = document.createElement('button');
                botonEliminar.type = 'button';
                botonEliminar.classList.add('btn', 'btn-outline-danger', 'btn-sm', 'flex-shrink-0');
                botonEliminar.textContent = 'Eliminar';
                botonEliminar.addEventListener('click', () => eliminarElemento(elemento));

                elemento.appendChild(textoNodo);
                elemento.appendChild(botonEliminar);
                lista.appendChild(elemento);
                input.value = '';
                mensaje.classList.add('d-none');
                actualizarEstado();
                input.focus();
            };

            formulario.addEventListener('submit', event => {
                event.preventDefault();
                agregarElemento();
            });

            actualizarEstado();