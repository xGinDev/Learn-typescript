(() => {
    const nakama: string = 'Luffy'

    function returnName():string{
        return nakama
    }

    const naka = (): string => {
        return 'Zoro'
    }

    console.log(typeof naka);
    

    const nakaName = returnName()

})()