function count_charater(N)
{
    let A=0;
    let D=0;
    for(let i=0;i<N.length;i++)
    {
        if(N[i]=='A')
        {
          A++;
        }else if(N[i]=='D')
        {
            D++;
        }
    }
    return[A,D];
}
const N="AbaDd";
const counts = count_charater(N);
console.log(counts.join(' '));