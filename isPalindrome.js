// Write a function to check whether a string is palindrome or not
function isPalindrome(str1)
{
    if(str1.length===0)
    {
        return ;
    }
    let str2= str1.split("");
    let j=str2.length-1;
    for(let i=0; i < str1.length/2; i++)
    {
        if(str1[i]!== str2[j])
        {
            
            return false;
        }
        j--;
    }
    return true;
}
console.log(isPalindrome('123454321'))