// Problem: Write a function to find the count of a smaller sub string in larger string
function stringSearch(str, substr)
{
    let count =0;
    for(let i=0; i< str.length- substr.length; i++)
    {
        for(let j=0;j< substr.length; j++)
        {
            if(str[i+j]!== substr[j]) break;
            if(j=== substr.length-1) count++;
        }
        
    }
    return count;
} 

console.log(stringSearch('I am a person. per person there are ten pearls','meal'))