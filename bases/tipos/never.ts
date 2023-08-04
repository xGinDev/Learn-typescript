(() => {
    
    const error = (message: string):never => {
        throw new Error(message)
    }

    error('Pailas');
    console.log('Hola Mor');
    
})()

