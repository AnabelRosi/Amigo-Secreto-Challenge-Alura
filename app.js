// Inicializar un arreglo para almacenar los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const nombre = amigoInput.value.trim();

    // Validar que el nombre no esté vacío
    if (nombre === "") {
        alert('Por favor, ingrese un nombre.');
        return;
    }

    // Agregar el nombre al arreglo de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    amigoInput.value = "";

    // Mostrar la lista actualizada de amigos
    mostrarAmigos();
}

// Función para mostrar amigos en la lista
function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar la lista existente

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li); // Agregar el elemento a la lista
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('No hay amigos disponibles para sortear.');
        return; // Salir de la función si no hay amigos
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}

