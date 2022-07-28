alert("Bienvenido al calculador de IVA")

function calcularIva(precio){
    const IVA = 1.21;
    return precio * IVA;
}

let repetir = true, pregunta

do {
    let precioIngresado = parseFloat(prompt("Ingresa el precio al que quiere calcular el IVA"))

    if (isNaN(precioIngresado)) {
        alert("Escriba un número por favor")
        continue
    }
    
    let resultado = calcularIva(precioIngresado)
    
    alert(resultado)

    do {
       pregunta = prompt("¿Desea continuar? SI/NO").toLowerCase()
    }
    
    while (pregunta != "si" && pregunta !="no")
    
    if (pregunta == "no") {
       repetir = false
    } 

} while (repetir)

 