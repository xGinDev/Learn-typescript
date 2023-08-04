"use strict";
(() => {
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
})();
