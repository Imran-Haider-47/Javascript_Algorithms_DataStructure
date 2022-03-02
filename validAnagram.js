function isValidAnagram(str1, str2)
{
    // const lookup= {};
    // Solution # 2
    // for(let i =0; i < str1.length; ++i )
    // {
    //     let letter = str1[i];
    //     lookup[letter] ? lookup[letter]+=1 : lookup[letter] = 1 ;
    // }

    // for( let i =0; i< str2.length; ++i)
    // {
    //     let letter = str2[i];
    //     if(!lookup[letter])
    //     {
    //         return false;
    //     } else{
    //         lookup[letter] -=1;
    //     }

    // }
    // return true; 

    //Solution # 1
    if(str1.length !== str2.length )
    {
        return false;
    }
    str1= Array.from(str1);
    str2= Array.from(str2);
    str1.sort(); // nlog(n);
    str2.sort();
    for(let i=0;i < str1.length;  ++i)
    {
        if(str1[i]!==str2[i])
        {
            return false;
        }
    }
    return true;
    
}

console.log(isValidAnagram("abdcdd","cbad"));