(() => {
    const fullName = (firstName: string, ...restArgs: string[]): string => {
        return `${firstName} ${restArgs.join(' ')}`
    }

    const luffy = fullName('Monkey', 'D', 'Luffy')

    console.log({luffy});
    
})()