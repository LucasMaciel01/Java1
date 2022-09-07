let totalCompra = 0
let productoSeleccionado = parseInt(prompt("ingresa el numero del producto que quieras comprar: 1- Brownie 2-Carrot Cake 3-Torta Hojaldre 4-Croissant 5-Scones 6-Pan"))
let seguirComprando = true
let decision
let productos = []
// class Producto {
//    constructor(nombre, precio, stock) {
//        this.nombre = nombre
//        this.precio = precio
//        this.stock = stock
//    }
//
//    modificarStock(){
//        this.stock = this.stock - 1
//    }
//}
//const Manzana = new Producto("manzana, 200,5")
//Manzana.modificarStock()
//Manzana.modificarStock()
//Manzana.modificarStock() 

const Brownie = {
    nombre: "Brownie",
    precio: 900, 
}
productos.push(Brownie)
const Carrot = {
    nombre: "Carrot-Cake",
    precio: 1500,
}
productos.push(Carrot)
const Torta = {
    nombre: "Torta-Hojaldre",
    precio: 1200,
}
productos.push(Torta)
const Croissant = {
    nombre: "Croissant",
    precio: 100, 
}
productos.push(Croissant)
const Scones = {
    nombre: "Scones",
    precio: 100, 
}
productos.push(Scones)
const Pan = {
    nombre: "Pan-Casero",
    precio: 400, 
}
productos.push(Pan)

console.log(productos)
















while(seguirComprando===true){
    if(productoSeleccionado=== 1){
        totalCompra = totalCompra + 900
    } else if(productoSeleccionado=== 2){
        totalCompra = totalCompra + 1500
    } else if(productoSeleccionado=== 3){
        totalCompra = totalCompra + 1200
    } else if(productoSeleccionado=== 4){
        totalCompra = totalCompra + 100
    } else if(productoSeleccionado=== 5){
        totalCompra = totalCompra + 100
    } else if(productoSeleccionado=== 6){
        totalCompra = totalCompra + 400
    } else{
        productoSeleccionado = parseInt(prompt("ingresa el numero del producto que quieras comprar: 1- Brownie 2-Carrot Cake 3-Torta Hojaldre 4-Croissant 5-Scones 6-Pan"))
        continue
    }

    decision = parseInt(prompt("Quieres seguir agregando productos? 1- Si 2-No"))
    if(decision=== 1){
        productoSeleccionado = parseInt(prompt("ingresa el numero del producto que quieras comprar: 1- Brownie 2-Carrot Cake 3-Torta Hojaldre 4-Croissant 5-Scones 6-Pan"))
    } else if(decision=== 2){
        seguirComprando = false
    }

}

alert("El valor total sin descuento ni impuestos es: "+totalCompra)

function calcularPrecioConDescuento(valor){
let descuento = 0
if(valor<=1000){
    descuento = 10
} else if(valor>1000 && valor<=1500){
    descuento = 15
} else if(valor>1500 && valor<=2000){
    descuento = 20
} else {
    descuento = 25
}
let valorDescuento = valor *(descuento/100)
valor = valor - valorDescuento
return valor 
}
let valorConDescuento = calcularPrecioConDescuento(totalCompra)
alert("El precio total con descuento sin impuesto es: "+valorConDescuento)

function calcularPrecioConImpuesto(valor){
    const impuestos = valor *(8/100)
    return valor + impuestos

}

let valorFinalConImpuesto = calcularPrecioConImpuesto(valorConDescuento)
alert("El valor final a pagar es de: "+valorFinalConImpuesto)