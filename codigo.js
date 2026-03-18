
function formatearNombre(nombre){
    return nombre .charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

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


//ejercicio 3
function maximo(a, b, c){
    const arrayNumeros = [a, b, c];
    const ord = arrayNumeros.sort((a, b) => b - a);
    const max = ord[0];
    return max;
  }


//ejercicio 5
function sumarArray(numeros){
let sum =0;
for (let i = 0; i < numeros.length; i++) {
    sum += numeros[i];
}
return sum;
}


//ejercicio 7
function obtenerPares(numeros){
    const numerosPar = numeros.filter(e => e % 2 === 0);
return numerosPar;
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
const usuario = {


 nombre: "Ana",


 edad: 20,


 activo: false


}
//ejercicio 9
function activarUsuario(usuario){
    usuario.activo = true;
    return usuario;
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
//ejercicio 11
function obtenernombres(usuarios){
  let nombres = [];

usuarios.filter(edad => edad>18);
usuarios.forEach(nombre =>{
console.log(nombre);
});


  for (let i = 0; i < usuarios.length; i++) {
    nombres.push(usuarios[i].nombre);
  }


  return nombres;
}


//ejercicio 13
function obteneredad(usuarios){
let ttl = [usuarios.edad].reduce((acum,num) => acum + num, 0);
  return ttl;
}


const producto3 = {
nombre:"Notebook",


precio:1000


}
let {nombre, precio} = producto3;




const producto2 = [
    {nombre:"Notebook",precio:1000},
    {nombre:"Lapiz",precio:500},
    {nombre:"goma",precio:200},
    {nombre:"regla",precio:800}
];


//ejercicio 17
function productoscaros(producto2){
  return producto2.filter(p => p.precio > 50);
}
console.log( productoscaros(producto2));


//////simulacion api
const usuarios2 = [


{id:1, nombre:"Ana", edad:20},


{id:2, nombre:"Juan", edad:15},


{id:3, nombre:"Pedro", edad:30}


]


function oobtenerUsuarios(){
 return usuarios2;
console.log(buscarProducto(producto2, "regla"))
function buscarProducto(productos, nombre){
let estaProducto = productos.some(element => element == nombre);
return estaProducto;

}

 function  obtenerUsuarioPorId(id){
 let resul= usuarios2.find(usuario => usuario.id === id);
    return resul;
}

function obtenerMayores(){
  let result = usuarios2.filter(usuario =>usuario.edad > 18);
return result
}
function  crearUsuario(nombren, edadn){
   const nuevoId = usuarios2.length + 1;
  const nuevoUsuario = {
    id: nuevoId,
    nombre: nombren,
    edad: edadn
  };


  usuarios.push(nuevoUsuario);


  return nuevoUsuario;
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
}
}
