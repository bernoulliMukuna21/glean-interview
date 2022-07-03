export const fizzBuzz = (minNumber: number, maxNumber: number) => {
    for(var i = minNumber; i <= maxNumber; i++){
        if(!(i%3 === 0 || i%4 === 0))
            console.log(i)
        else if(i%3 === 0 )
            console.log('fizz');
        else if(i%4 === 0)
            console.log('buzz');
    }
}

fizzBuzz(1, 100);