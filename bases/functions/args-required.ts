(() => {
    const fullName = (firstName: string, lastName: string): string => {
        return `${firstName} ${lastName}`
    }

    const name = fullName ('Monkey D', 'Luffy')
    
    console.log({name});

})()