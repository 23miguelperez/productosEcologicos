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
