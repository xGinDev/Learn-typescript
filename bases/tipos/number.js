"use strict";
(() => {
    let nakamas = 10;
    console.log({ nakamas });
    const tente = 20;
    if (nakamas < tente) {
        console.log("Problems");
    }
    else {
        console.log("Melos");
    }
    nakamas = Number('55');
    console.log({ nakamas });
})();
