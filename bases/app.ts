(() => {
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


})();
