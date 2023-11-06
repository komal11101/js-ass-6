function Count_Head(S) {
    const charCount = {};
    const result = [];

    for (const char of S) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    for (const char in charCount) {
        if (charCount[char] > 1) {
            result.push(char + charCount[char]);
        }
    }

    return result.sort().join('');
}
const S = "prepbytes";
const updatedString = Count_Head(S);
console.log(updatedString);
