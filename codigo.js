//Ejercicio 2 — Contar letras
contarLetras("hola mundo");
function contarLetras(palabra){
    for(let i = 0; i <=  palabra.length; i++){
        if( palabra.length[i] != " " ){
            i++;
        }
    }

  console.log(i);
}

//Ejercicio 4 — Validar password
function ValidarContraseña(password){
    let Validacion =false;
    if(password.length == 8 && ){
        Validacion = true;
    }
    return Validacion;
}


//Ejercicio 6 - Número mayor de un array
const Array = [1,40,17,9];
console.log(mayorNumero(Array));
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
function descripcionUsuario(usuario){
    console.log('el usuario'+ usuario.nombre + 'tiene'+usuario.edad);
}


//Ejercicio 10 — Precio total
const productos = [
{nombre:"Mouse", precio:10},
{nombre:"Teclado", precio:25},
{nombre:"Monitor", precio:200}
]

function calcularTotal(){
    let total = 0;
    for(let i = 0; i<= productos.length; i++){
            total =+ productos.precio[i];
            i++;
    }
    return total
}
console.log (calcularTotal());



//Ejercicio 12 - filter


const usuarios = [
{nombre:"Ana", edad:17},
{nombre:"Juan", edad:25},
{nombre:"Pedro", edad:30}
]

usuarios.filter(edad => edad>18);

usuarios.forEach(nombre =>{ //funcion que recibe por parametro otra funcion
console.log(nombre); //recorre cada elemento mejor que foreach
});


//Ejercicio 14 — Destructuring

const producto = {
nombre:"Notebook",
precio:1000
}
let {nombre, precio} = producto;

console.log(nombre);
console.log(precio);

//Ejercicio 16 - Buscar Productos

const producto2 = [
    {nombre:"Notebook",precio:1000},
    {nombre:"Lapiz",precio:500},
    {nombre:"goma",precio:200},
    {nombre:"regla",precio:800}
]


function buscarProducto(productos, nombre){
const estaJuli = OtroArray.some(element => element ==="juli")

}

//Ejercicio 18 — Promedio