(() => {
    /* Examen 1 */
    /* Tipos */
    const zoro: string = "Zoro";
    const kaido: string = "Kaido";

    const live: boolean = false;

    /* Tuplas */
    const naka: [string, string] = ["Jimbei", "Nami"];
    const naka2: [string, number, boolean] = ["Jimbei", 2, false];

    /* Array */
    const aliados: string[] = ['Marco', 'Pedro', 'Yamato']

    /* Enum */

    enum force {
        chopper = 0,
        franky = 1,
        brook = 5,
        robin = 100
    }

    /* Functions */

    function gear(gear: string) {
        return gear;
    }

    gear('Papi q')

    /*    function help(msg: string): never {
           throw new Error(msg)
       }
   
       help('Pailas ps') */

    /* Prueba */
    const power: any = '10'
    const widthPower: number = power.length
    console.log(widthPower);

    /* Examen 2 */

    // Funciones Básicas
    function sumar(a: number, b: number): number {
        return a + b;
    }

    const contar = (heroes: string[]) => {
        return heroes.length;
    }

    const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);

    //Parametros por defecto
    const llamarBatman = (llamar: boolean = false) => {
        if (llamar) {
            console.log("Batiseñal activada");
        }
    }

    llamarBatman();

    // Rest?
    const unirheroes = (...personas: string[]) => {
        return personas.join(", ");
    }



    // Tipo funcion
    const noHaceNada = (numero: number, texto: string, booleano: boolean, arreglo: string[]) => { }

    // Crear el tipo de funcion que acepte la funcion "noHaceNada"
    let noHaceNadaTampoco: (n: number, t: string, b: boolean, a: string[]) => void;
    noHaceNadaTampoco = noHaceNada

})();
