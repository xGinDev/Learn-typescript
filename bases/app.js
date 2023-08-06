"use strict";
(() => {
    /* Examen 1 */
    /* Tipos */
    const zoro = "Zoro";
    const kaido = "Kaido";
    const live = false;
    /* Tuplas */
    const naka = ["Jimbei", "Nami"];
    const naka2 = ["Jimbei", 2, false];
    /* Array */
    const aliados = ['Marco', 'Pedro', 'Yamato'];
    /* Enum */
    let force;
    (function (force) {
        force[force["chopper"] = 0] = "chopper";
        force[force["franky"] = 1] = "franky";
        force[force["brook"] = 5] = "brook";
        force[force["robin"] = 100] = "robin";
    })(force || (force = {}));
    /* Functions */
    function gear(gear) {
        return gear;
    }
    gear('Papi q');
    /*    function help(msg: string): never {
           throw new Error(msg)
       }
   
       help('Pailas ps') */
    /* Prueba */
    const power = '10';
    const widthPower = power.length;
    console.log(widthPower);
    /* Examen 2 */
    // Funciones Básicas
    function sumar(a, b) {
        return a + b;
    }
    const contar = (heroes) => {
        return heroes.length;
    };
    const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);
    //Parametros por defecto
    const llamarBatman = (llamar = false) => {
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman();
    // Rest?
    const unirheroes = (...personas) => {
        return personas.join(", ");
    };
    // Tipo funcion
    const noHaceNada = (numero, texto, booleano, arreglo) => { };
    // Crear el tipo de funcion que acepte la funcion "noHaceNada"
    let noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
})();
