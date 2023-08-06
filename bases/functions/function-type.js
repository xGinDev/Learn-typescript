"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta melo`;
    let myFunction;
    /*   myFunction = 10;
      console.log(myFunction) */ ;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    /*  myFunction = greet
     console.log(myFunction('JohnYi'));
 
     myFunction = saveTheWorld
     console.log(myFunction()); */
})();
