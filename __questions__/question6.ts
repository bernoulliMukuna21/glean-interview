const areStringsAnagram = (string1: string, string2: string) => {
    if (string1.length !== string2.length)
        return false;
    
    var string1_ordered = string1.split('').sort().join('');
    var string2_ordered = string2.split('').sort().join('');
    
    return string1_ordered === string2_ordered;
}
console.log('Are the strings anagram? ')

var string1 = 'test';
var string2 = 'sett';
console.log(`${string1} and ${string2}?`, areStringsAnagram(string1, string2));

string1 = 'test';
string2 = 'atts';
console.log(`${string1} and ${string2}?`, areStringsAnagram(string1, string2));

