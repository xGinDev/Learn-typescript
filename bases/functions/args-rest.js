"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const luffy = fullName('Monkey', 'D', 'Luffy');
    console.log({ luffy });
})();
