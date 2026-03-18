function formatearNombre(nombre){
    return nombre .charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}
console.log (formatearNombre("JUAN"));
console.log (formatearNombre("mARIA"));


//ejercicio 3
function maximo(a, b, c){
    const arrayNumeros = [a, b, c];
    const ord = arrayNumeros.sort((a, b) => b - a);
    const max = ord[0];
    return max;
  }
  console.log (maximo("1,2,3"));


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
const usuarios = [


{nombre:"Ana", edad:17},


{nombre:"Juan", edad:25},


{nombre:"Pedro", edad:30}


]
//ejercicio 11
function obtenernombres(usuarios){
  let nombres = [];


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


const producto = {


nombre:"Notebook",


precio:1000


}




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
