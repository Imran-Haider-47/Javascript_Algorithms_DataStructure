// Write a function to reverse a string
function reverse(str1)
{

    //console.log(typeof(str1))
    let newArray= str1.split("");
    
    let j=newArray.length;
    let temp=newArray[j];
    for(let i=0;i<newArray.length;i++)
    {
        if(i=== newArray.length/2)
        {
            break;
        }
        temp = newArray[j];
        newArray[j]= newArray[i];
        newArray[i]=temp;
        j--; 
    }
    let joinArray = newArray.join("");
    return joinArray;
}
console.log(reverse('12345'));