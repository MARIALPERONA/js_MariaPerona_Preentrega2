// Definición de variables
let usuarioLogueado = false;
let carritoDeCompras = [];
const productos = [
    { id: 1, nombre: "Torta de chocolate", precio: 3500 },
    { id: 2, nombre: "Tarta de Frutilla", precio: 2800 },
    { id: 3, nombre: "Cupcakes surtidos", precio: 1000 },
    
];

// Función para iniciar sesión
function iniciarSesion() {
    usuarioLogueado = true;
    console.log("¡Has iniciado sesión!");
}

// Función para agregar un producto al carrito
function agregarAlCarrito(productoId) {
    if (!usuarioLogueado) {
        console.log("Debes iniciar sesión para agregar productos al carrito.");
        return;
    }

    const productoEncontrado = productos.find(producto => producto.id === productoId);

    if (productoEncontrado) {
        carritoDeCompras.push(productoEncontrado);
        console.log(`${productoEncontrado.nombre} ha sido agregado al carrito.`);
    } else {
        console.log("Producto no encontrado.");
    }
}

// Función para calcular el total del carrito
function calcularTotalCarrito() {
    let total = 0;
    for (const producto of carritoDeCompras) {
        total += producto.precio;
    }
    return total.toFixed(2);
}

// Inicio del programa
iniciarSesion();
agregarAlCarrito(1);
agregarAlCarrito(2);
agregarAlCarrito(5); // Intentamos agregar un producto que no existe

// Mostrar el contenido del carrito
console.log("Carrito de compras:", carritoDeCompras);

// Calcular y mostrar el total del carrito
console.log("Total del carrito: $" + calcularTotalCarrito());