const squareNumbers = (minNumber: number, maxNumber?: number): number[] => {
    var startNumber:number;

    if(!maxNumber){
        maxNumber = minNumber;
        minNumber = 1;
        startNumber = 1;
    }else
        startNumber = Math.ceil(Math.sqrt(minNumber));
    
    const numberOfSquares = Math.floor(Math.sqrt(maxNumber)) -  Math.ceil(Math.sqrt(minNumber)) + 1;
    var listOfAllSquares: number[] = [];

    for(var i=0; i<numberOfSquares; i++){
        const squareNumber:number = Math.pow((startNumber - 1), 2) + (2*startNumber - 1);
        listOfAllSquares.push(squareNumber);
        startNumber++;
    }

    return listOfAllSquares;
}

const findTwoNumbers = (targetSum: number, listOfNumbers: number[]) => {
    var listOfCombinations: number[][] = [];

    for(var i=0; i<=listOfNumbers.length; i++){
        const difference = targetSum - listOfNumbers[i];
        const isDifferenceInList = listOfNumbers.find(number => number===difference);
        
        if (isDifferenceInList){
            const isCombinationInlist = listOfCombinations.find((numbers: number[]) =>
                numbers[0] === difference || numbers[1] === difference
            );

            if(!isCombinationInlist){
                listOfCombinations.push([listOfNumbers[i], difference]);
            }
        } 
    }

    return listOfCombinations;
}

// All square numbers between 1000 to 10000
var listOfSquareNumbers_1000_to_10000 = squareNumbers(1000, 10000);
console.log('--- All square numbers between 1000 to 10000 ----');
console.log(listOfSquareNumbers_1000_to_10000)

// Find two square numbers that add up 1000
var listOfSquareNumbers_1000 = squareNumbers(1000);
console.log('\n--- Two squares that add up to 1000 ----');
console.log(findTwoNumbers(1000, listOfSquareNumbers_1000));