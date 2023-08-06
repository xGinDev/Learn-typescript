"use strict";
(() => {
    const nakama = 'Luffy';
    function returnName() {
        return nakama;
    }
    const naka = () => {
        return 'Zoro';
    };
    console.log(typeof naka);
    const nakaName = returnName();
})();
