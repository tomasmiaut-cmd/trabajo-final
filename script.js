const carrito = document.getElementById("carrito");
const abrirCarrito = document.getElementById("abrir-carrito");
const cerrarCarrito = document.getElementById("cerrar-carrito");

const botonesComprar = document.querySelectorAll(".comprar");

const listaCarrito = document.getElementById("lista-carrito");

const totalElemento = document.getElementById("total");

const contador = document.getElementById("contador");

let carritoProductos = [];


abrirCarrito.addEventListener("click", () => {
    carrito.classList.add("activo");
});


cerrarCarrito.addEventListener("click", () => {
    carrito.classList.remove("activo");
});


botonesComprar.forEach(boton => {

    boton.addEventListener("click", () => {

        const nombre = boton.dataset.nombre;
        const precio = parseFloat(boton.dataset.precio);

        carritoProductos.push({
            nombre,
            precio
        });

        actualizarCarrito();
    });

});

/* ACTUALIZAR */

function actualizarCarrito(){

    listaCarrito.innerHTML = "";

    let total = 0;

    carritoProductos.forEach((producto, index) => {

        total += producto.precio;

        listaCarrito.innerHTML += `
        
        <div class="item-carrito">

            <h5>${producto.nombre}</h5>

            <p>S/${producto.precio}</p>

            <button onclick="eliminarProducto(${index})">
                Eliminar
            </button>

        </div>
        
        `;
    });

    totalElemento.textContent = total.toFixed(2);

    contador.textContent = carritoProductos.length;
}

/* ELIMINAR */

function eliminarProducto(index){

    carritoProductos.splice(index, 1);

    actualizarCarrito();
}
$(document).ready(function() {
        $('#login-form').on('submit', function(event) {
            event.preventDefault();

            const user = $('#username').val();
            const pass = $('#password').val();

            const validUser = "tomas";
            const validPass = "miau";

            if (user === validUser && pass === validPass) {
                $('#error-message').addClass('d-none');
                alert('¡Bienvenido, ' + user + '! Login exitoso.');
                    
                    // Aquí normalmente redirigirías a otra página, ej:
                    // window.location.href = "dashboard.html";
            } else {
                    // Si es incorrecto, mostrar el mensaje de error
                    $('#error-message').removeClass('d-none');
                    // Opcional: limpiar la contraseña
                    $('#password').val('');    
            }
        });
    });