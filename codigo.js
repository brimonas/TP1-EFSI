//Ejercicio 2 — Contar letras

console.log(contarLetras("hola mundo"));
function contarLetras(palabra){
    let CantidadLetras = 0;
    for(let i = 0; i <  palabra.length; i++){
        if( palabra[i] != ' ' ){
            CantidadLetras++;
        }
    }

return CantidadLetras;
}

//Ejercicio 4 — Validar password
console.log(ValidarContraseña("NoMeBaño08"))
function ValidarContraseña(password){
    let Validacion =false;
    if(password.length == 8 ){
        Validacion = true;
    }
    return Validacion;
}


//Ejercicio 6 - Número mayor de un array
const Array1 = [1,40,17,9];
console.log(mayorNumero(Array1));
function mayorNumero(numeros)
{
const ArrayOrdenado = numeros.sort((a, b ) => a - b);
let ultimoNum = ArrayOrdenado.length;
let MayorNum = ArrayOrdenado[ultimoNum];
return MayorNum;
}

//Ejercicio 8 — Descripción de usuario

const usuario = {
 nombre: "Ana",
 edad: 20,
 activo: false
}
console.log(descripcionUsuario(usuario));
function descripcionUsuario(usuario){
    return console.log('el usuario '+ usuario.nombre + ' tiene '+usuario.edad);
}


//Ejercicio 10 — Precio total
const productos1 = [
{nombre:"Mouse", precio:10},
{nombre:"Teclado", precio:25},
{nombre:"Monitor", precio:200}
]

function calcularTotal(productos1){
    let total = 0;
    for(let i = 0; i < productos1.length; i++){
            total += productos1[i].precio;
        
    }
    return total;
}
console.log(calcularTotal(productos1));



//Ejercicio 12 - filter


const usuarios = [
{nombre:"Ana", edad:17},
{nombre:"Juan", edad:25},
{nombre:"Pedro", edad:30}
]

usuarios.filter(edad => edad>18);
usuarios.forEach(nombre =>{
console.log(nombre);
});


//Ejercicio 14 — Destructuring

const producto3 = {
nombre:"Notebook",
precio:1000
}
let {nombre, precio} = producto3;

console.log(nombre);
console.log(precio);

//Ejercicio 16 - Buscar Productos

const producto2 = [
    {nombre:"Notebook",precio:1000},
    {nombre:"Lapiz",precio:500},
    {nombre:"goma",precio:200},
    {nombre:"regla",precio:800}
]

console.log(buscarProducto(producto2, "regla"))
function buscarProducto(productos, nombre){
let estaProducto = productos.some(element => element == nombre);
return estaProducto;
}

//Ejercicio 18 — Promedio

const Promedio = [9,7,8,8,6,10];
console.log(CalculoPromedio(Promedio));
function CalculoPromedio(numeros){
        let total = 0;
    for(let i = 0; i< Promedio.length; i++){
            total += Promedio[i];
            
    }
    let promedioTotal = total / Promedio.length;
    return promedioTotal;
}