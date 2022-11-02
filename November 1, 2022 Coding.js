// Given a string, return a new string that has transformed based on the input:
// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.


// For example:
// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.



// function transformStr(str){
//     //todo: split string " "(with space to split words ("" <- this will split letters) then reverse and join back together)
//     //todo: split string "" characters (reverse cASING in new array) map for new array
//     //todo: l === l.toUpperCase() letter equals letter.toUpperCase letter is already uppercase ? if not l.toLowerCase()

//     let reversedStr = str.split(' '). reverse().join(' ')
//     let transformStr = reversedStr.split('').map(l => l === l.toUpperCase ? l.toLowerCase() : l.toUpperCase())  

// }



console.log(transformStr('Example Input'), 'iNPUT eXAMPLE')
console.log(transformStr('Jalani Bray'), 'bRAY jALANI')


const transformStr = str => str.split(' ').reverse().join(' ').split('').map 
( l => l === l.toUpperCase ? l.toLowerCase() : l.toUpperCase()).join('')