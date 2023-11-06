function isVowel(char) {
    const vowels = "AEIOUaeiou";
    return vowels.includes(char);
}

function countVowels(S) {
    let count = 0;
    for (let i = 0; i < S.length; i++) {
        if (isVowel(S[i])) {
            count++;
        }
    }
    return count;
}

function countConsonants(S) {
    let count = 0;
    for (let i = 0; i < S.length; i++) {
        if (!isVowel(S[i]) && S[i].match(/[a-zA-Z]/)) {
            count++;
        }
    }
    return count;
}

const S = "Prepbytes";
const vowelsCount = countVowels(S);
const consonantsCount = countConsonants(S);

console.log(vowelsCount + " " + consonantsCount);




// for (let i = 0; i < S.length; i++) {
//     const char = S[i].toLowerCase(); // Convert to lowercase for case-insensitivity
    
//     if (char >= 'a' && char <= 'z') {
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//             vowelsCount++;
//         } else {
//             consonantsCount++;
//         }
//     }
// }

// return `${vowelsCount} ${consonantsCount}`;
// }