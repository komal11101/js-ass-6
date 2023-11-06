function count_vowel(N)
{
    const vowel="AEIOUaeiou";
    let count=0;
     for( const char of N)
     {
        if(vowel.includes(char))
        {
            count++;
        }
     }
     return count;

}
const N="Prepbytes";
console.log(count_vowel(N));