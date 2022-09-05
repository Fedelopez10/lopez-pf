const productos = [
    { nombre: "harina", precio: 50},
    { nombre: "galletitas", precio: 100},
    { nombre: "cerveza", precio: 150},
    { nombre: "leche", precio: 200},
    { nombre: "gaseosa", precio: 250},
];

let carrito = []

let seleccion = prompt ("hola desea comprar algun producto si o no");

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingresa si o no")
    seleccion = prompt ("hola desea comprar algo si o no");
}

if(seleccion == "si"){
    alert ("A continuacion nuestra lista de productos")
    let todoslosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert (todoslosProductos.join(" - "));
}
else if (seleccion == "no"){
    alert ("Gracias por venir, hasta pronto!!");
}

while (seleccion != "no"){
    let producto = prompt ("Agrega un producto a tu carrito");
    let precio = 0

    if(producto == "harina" || producto == "galletitas" || producto == "cerveza" || producto == "leche" || producto == "gaseosa"){
        switch (producto){
            case "harina":
            precio = 50;
            break;
            case "galletitas":
            precio = 100;
            break;
            case "cerveza":
            precio = 150;
            break;
            case "leche":
            precio = 200;
            break;
            case "gaseosa":
            precio = 250;
            break;
            default:
                break;
        }
    let unidades = parseInt(prompt("Cuantas unidades quiere llevar"));

    carrito.push ({producto, unidades, precio})
    console.log(carrito);
    } else {
        alert("No tenemos ese producto");
    }

    seleccion = prompt(" Desea seguir comprando?");

    while(seleccion === "no"){
        alert ("Gracias por la compra! Hasta pronto")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
            Total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`);
        })
        break;
    }
}

const Total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
alert(`El total a pagar por su compra es: ${Total}`);