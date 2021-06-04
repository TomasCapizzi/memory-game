const btnPlay = document.getElementById('play');

const cartas = [{
        codigo: 1,        
        id: 1,
        nombre: 'oceano',
        src: 'https://images.unsplash.com/photo-1468581264429-2548ef9eb732?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    }, {
        codigo: 2,
        id: 2,
        estado: false,
        nombre: 'bosque',
        src: 'https://images.unsplash.com/photo-1582566517828-a5eb582a76d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=963&q=80'
    }, {
        codigo: 3,
        id: 3,
        estado: false,
        nombre: 'city',
        src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1113&q=80'
    }, {
        codigo: 4,
        id: 4,
        estado: false,
        nombre: 'cerro',
        src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
    }, {
        codigo: 5,
        id: 5,
        estado: false,
        nombre: 'motaña',
        src: 'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
    }, {
        codigo: 6,
        id: 6,
        estado: false,
        nombre: 'playa',
        src: 'https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
    }, {
        codigo: 7,
        id: 1,
        estado: false,
        nombre: 'oceano',
        src: 'https://images.unsplash.com/photo-1468581264429-2548ef9eb732?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    }, {
        codigo: 8,
        id: 2,
        estado: false,
        nombre: 'bosque',
        src: 'https://images.unsplash.com/photo-1582566517828-a5eb582a76d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=963&q=80'
    }, {
        codigo: 9,
        id: 3,
        estado: false,
        nombre: 'city',
        src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1113&q=80'
    }, {
        codigo: 10,
        id: 4,
        estado: false,
        nombre: 'cerro',
        src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
    }, {
        codigo: 11,
        id: 5,
        estado: false,
        nombre: 'motaña',
        src: 'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
    }, {
        codigo: 12,
        id: 6,
        estado: false,
        nombre: 'playa',
        src: 'https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
    }

]




const tablero = document.getElementById('tablero');
const vidas = document.getElementById('vidas'); // Contenedor de Vidas
const vida1 = document.getElementById('vida1');
const vida2 = document.getElementById('vida2');
const resultado = document.getElementById('resultado');

tablero.innerHTML = '';

let eleccion = [] // Guardo los valores que elijo, para comparar si son iguales
let vidasRestantes = 2; // Cantidad de Vidas
let opcionesCorrectas = 0; // Sumador de opciones correctas
const posibilidades = 12; // las 12 cartas (2 de cada)


btnPlay.addEventListener('click', () => {
    btnPlay.classList.add('oculto');
    resultado.innerText = '';
    vida1.innerHTML = `<i class="fas fa-heart"></i>`;
    vida2.innerHTML = `<i class="fas fa-heart"></i>`;
    vidas.classList.remove('oculto');
    cartas.sort(function() { return Math.random() - 0.5 }); // Ordeno de manera RANDOM el array de Cartas
    crearTablero(); // Creo el Tablero
});

function crearTablero() {
    resultado.innerText = 'Analiza el tablero antes que desaparezca..' // Aviso que chequeen el tablero para recordar posiciones
    for (let i = 0; i < posibilidades; i++) {
        const contenedorImg = document.createElement('div');
        const carta = document.createElement('img');
        contenedorImg.classList.add('contenedor-img');
        carta.src = cartas[i].src;
        contenedorImg.appendChild(carta)
        tablero.appendChild(contenedorImg);
        let imgClickeada = false;
        setTimeout(() => {
            carta.addEventListener('click', () => { // evento click al clickear imagen
                carta.style.opacity = 1; //Muestro la imagen
                guardarElección(cartas[i]); //Guardamos eleccion                
                
                if ((eleccion.length % 2) == 0 && eleccion.length > 1) {
                    controlarResultado(eleccion[0].id, eleccion[1].id,eleccion[0].codigo, eleccion[1].codigo ,imgClickeada, carta);
                } //Controlo los resultados en nros pares, osea al segundo click          
                imgClickeada = true;
            });
        }, 3300)

        // Funcion que oculta las imágenes luego de 2 segundos, dado que es el tiempo inicial de observación del tablero antes de adivinar
        setTimeout(() => {
            opacidad(carta);
            contenedorImg.style.cursor = 'pointer';
            resultado.innerText = ''; // Quito la advertencia
        }, 3300);
    }

}


function controlarResultado(valor1, valor2, codigo1, codigo2,estado,carta) {
    if(estado){
        console.log('No vale!');
        return eleccion=[];
    }else if (opcionesCorrectas < 5) { // Ejecuta hasta antes de adivinar la última
        if (valor1 == valor2 && codigo1 != codigo2) { // Si los valores elegidos son iguales
            opcionesCorrectas++; //Suma la opcion
            console.log('Correcto', opcionesCorrectas);
            return eleccion = []; //Borra el array
        }else if(codigo1 == codigo2){
            console.log('No puedes clickear la misma imagen');
            return eleccion.splice(1,1)
        } 
        else if (vidasRestantes == 2) { //En cambio si no son correctas
            console.log('Incorrecto');
            descontarVida(vida1)
            resultado.innerText = 'Te queda 1 vida'; // Adviere que queda 1 sola vida
            console.log(eleccion[1]);
            opacidad(carta); //Opaca la carta para que no se muestre cual erró
            return eleccion.splice(1, 1); // Devuelve el array sin la elección incorrecta
        } else if (vidasRestantes == 1) { //Ultima vida
            console.log('No hay mas vidas');
            eleccion = [];
            descontarVida(vida2)
            resultado.innerText = 'Has perdido!';
            gameOver();
        }
    } else if (opcionesCorrectas === 5) {
        if (valor1 == valor2) {
            console.log(opcionesCorrectas);
            resultado.innerText = '¡Has Ganado! Felicitaciones';
            for (let i = 0; i <= 20; i++) {
                setTimeout(congrats, 600);
            }
            gameOver();
        } else if (valor1 != valor2) {
            console.log('Incorrecto', opcionesCorrectas);
            eleccion.splice(1, 1);
            if (vidasRestantes > 1) {
                descontarVida(vida1)
            } else {
                descontarVida(vida2);
            }

        }
    } else if (opcionesCorrectas === 6) {
        resultado.innerText = '¡Has Ganado! Felicitaciones';
        for (let i = 0; i <= 20; i++) {
            setTimeout(congrats, 600);
        }
        gameOver();
    }
}

function descontarVida(vida) {
    vida.innerHTML = `<i class="fas fa-heart-broken"></i>`; //Cambia el icono de la vida 1
    vidasRestantes--; // Descuenta una vida
}


function guardarElección(valor) {
    if (eleccion.length <= 2) {
        eleccion.push(valor);
    }


}

function gameOver() {
    tablero.innerHTML = '';
    eleccion = [];
    vidasRestantes = 2;
    opcionesCorrectas = 0;
    btnPlay.classList.remove('oculto');
    vidas.classList.add('oculto');
}



function opacidad(element) {
    element.style.opacity = 0;
}



function congrats() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');

    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.animationDuration = Math.random() * 2 + 3 + 's';

    emoji.innerText = '🎖️';

    document.body.appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, 5000)
}
