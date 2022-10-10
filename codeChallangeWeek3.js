// function hasMoreVowels (word){
//     if ((word.match(/[aeiou]/gi).length) > (word.length / 2) ){
//         return true
//     } else {
//         return false
//     }
// }


// console.log(hasMoreVowels('Micee'))

function hasMoreVowels (word) {
     word = word.toLowerCase();
     let otherCount = 0;
     let vowelCount = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u') {
            vowelCount++
        } else {
            otherCount++
        }
    }
    if (vowelCount > otherCount) {
        return true;
    }
    return false;
}


console.log(hasMoreVowels('moose'))