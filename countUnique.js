function countUniqueValues(arr1)
{
    // Soltion # 1
    if(arr1.length===0)
    {
        return 0;
    }
    let i =0;
    let count =0;
    for(let j =1; j< arr1.length;j++)
    {
        if(arr1[i]==arr1[j])
        {
            continue;
        }
        else{
            i=j;
            count+=1;
        }
    }

    return count+=1;
    
    // Solution # 2
    // console.log(arr1);
    // let i=0;
    // for(let j =0; j< arr1.length; j++)
    // {
    //     if(arr1[j]===arr1[i])
    //     {
            
    //         continue;
    //     }
    //     else{
    //         i+=1;
    //         arr1[i]= arr1[j];
            
    //     }
    // }
    // return i+1;
}

console.log(countUniqueValues([1,1,1,1,1,2,2]));

