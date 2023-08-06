"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || ''}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || ''}`.toLowerCase();
        }
    };
    const name = fullName('Monkey D', 'Luffy', true);
    console.log({ name });
})();
