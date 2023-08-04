(() => {
    let zoro: any = 123
    let sanji;
    let luffy

    zoro = 'Zoro'

    // console.log(zoro.charAt(0));
    console.log((zoro as string).charAt(2));
    
    zoro = 456561

    // console.log(zoro.toFixed(1));
    console.log(<number>zoro.toFixed(2));
    
    console.log({sanji});
    console.log({luffy});
    
})()

