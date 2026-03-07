const dayjs = require('dayjs');

const IVA = 0.21;

const nombreCliente = 'Miguel Pérez';
let direccionCliente = 'Calle Falsa 123';
let telefonoCliente = '555-1234';
let subTotal = 110;
let stock = true;
let porcentajeDescuento = 0;
let fechaEntrega = dayjs().add(3, 'day').format('YYYY-MM-DD');

const productos = [
    { nombre: 'Producto A', precio: 19, cantidad: 1 },
    { nombre: 'Producto B', precio: 92, cantidad: 2 },
    { nombre: 'Producto C', precio: 60, cantidad: 10 },
    { nombre: 'Producto D', precio: 81, cantidad: 5 },  
    { nombre: 'Producto E', precio: 16, cantidad: 9 },
    { nombre: 'Producto F', precio: 49, cantidad: 7 },
]

let cliente = nombreCliente.toLocaleUpperCase();
let direccionNormalizada = direccionCliente.toLocaleUpperCase();
let direccionNormalizada2 = direccionCliente.toLocaleLowerCase();

let tieneFragil = productos.includes(producto => producto.nombre.toLocaleLowerCase().includes('fragil'));

function comprobacionStock(productos) {
    if (!stock) {
        console.log('No hay stock disponible para este pedido.');
        return false;
    }

    return productos.every(producto => producto.cantidad > 0);
}

function porcentadescuento(subTotal) {
    if (subTotal > 100) {
        return porcentajeDescuento * 0.05;
    
    }else {
        return porcentajeDescuento = 0;
    }
}

function calcularTotal(subTotal, porcentajeDescuento) {
    const descuento = subTotal * porcentajeDescuento;
    const totalConDescuento = subTotal - descuento;
    const totalConIVA = totalConDescuento * (1 + IVA);
    return totalConIVA.toFixed(2)  ;
}

function entregarPedido(fechaEntrega) {
    if (comprobacionStock(productos)) {
        const descuentoAplicado = porcentadescuento(subTotal);
        const total = calcularTotal(subTotal, descuentoAplicado);
        console.log(`Pedido entregado a ${cliente} en la dirección ${direccionNormalizada}. Total a pagar: $${total}. Fecha de entrega: ${fechaEntrega}`);
    }
}

const resumenPedido = `
=========================================
🌱 TIENDA ECO - RESUMEN DEL PEDIDO 🌱
=========================================
👤 Cliente: ${clienteNormalizado}
📦 Productos: ${productos.join(", ")}
⚠️ ¿Contiene frágiles?: ${tieneFragil ? "Sí (Se requiere embalaje especial)" : "No"}

--- Desglose de Facturación ---
Subtotal inicial: ${subtotal.toFixed(2)}€
Descuento aplicado: ${porcentajeDescuento * 100}%
Subtotal tras descuento: ${subtotalConDescuento.toFixed(2)}€
Impuestos (IVA 21%): ${(subtotalConDescuento * IVA).toFixed(2)}€
-----------------------------------------
💶 TOTAL A PAGAR: ${total.toFixed(2)}€
=========================================
🚚 Fecha estimada de entrega: ${fechaEntrega}
=========================================
`;
