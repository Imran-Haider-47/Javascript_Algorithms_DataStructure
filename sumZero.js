
function sumZero(arr1)
{
    let left=arr1[0];
    let right = arr1.length-1 ;
    while(left < right)
    {
        let sum = arr1[left] + arr1[right];
        if(sum === 0 )
        {
            return [arr1[left], arr1[right]];
        } 
        else if(sum > 0)
        {
            right --;
        }
        else{
            left++;
        }
    }

    
    
    
    // for(let i=0; i < arr1.length-1 ; i++)
    // {
    //     for(let j =i+1 ; j < arr1.length; j++)
    //     {
    //         if(arr1[i]+arr1[j]===0)
    //         return [arr1[i], arr1[j]];
    //     }
    // }
    // return false;
}

// The input is sorted array
console.log(sumZero([-1,0,1,2]));