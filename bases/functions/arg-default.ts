(() => {
    const fullName = (firstName: string, lastName?: string, upper: boolean = false): string => {
        if(upper){
            return `${firstName} ${lastName || ''}`.toUpperCase()
        } else {
            return `${firstName} ${lastName || ''}`.toLowerCase();
        }
    }

    const name = fullName ('Monkey D', 'Luffy', true)
    
    console.log({name});

})()