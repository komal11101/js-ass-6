function findlength(N)
{
    let length=0;
    for(const char of N)
    {
        length++;
    }
    return length;
}
const re="CeDqe";
console.log(findlength(re));