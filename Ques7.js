function ispalidrome(S)
{
   const s=S.toLowerCase();
   const a= S.split('').reverse().join('');
   if( a===s)
   {
    return "true";
   }else
   {
    return "false";
   }
}
console.log(ispalidrome("Naman"));
console.log(ispalidrome("naman"));