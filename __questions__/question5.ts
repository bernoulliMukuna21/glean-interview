const heightsOrdering = (listOfHeights: string[]) => {
    var listOfHeights_obj:any = {};

    for(var i=0; i<listOfHeights.length; i++){
        var currHeight = listOfHeights[i].split("'");
        const heightInMeters = conversion(parseInt(currHeight[0]), parseInt(currHeight[1]));
        listOfHeights_obj[heightInMeters] = listOfHeights[i];
    }
    
    return sortObj(listOfHeights_obj)
}

const conversion = (feet:number, inch:number) => feet/3.2808 + inch/39.370;
const sortObj = (obj: any) => Object.keys(obj).sort().map( key => obj[key]);

console.log(heightsOrdering(["6'2", "5'7", "6'1", "5'11"]))