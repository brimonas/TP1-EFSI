//ejercicio 1:Que reciba un string y devuelva el nombre con:-la primera letra en mayúscula y el resto en minúscula
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
    usuario.activo = true;
    return usuario;
}
