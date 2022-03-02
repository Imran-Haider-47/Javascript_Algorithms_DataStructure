function addUpTo(n)
{
    return n*(n + 1)/2;
}


// Problem 1: Write a function that takes two numbers and return their sum
function sumTwo(n1, n2)
{
    return n1+n2;
}

// Problem 2 : Write a function that takes a string as input and return the count each character in the string
function charCount(str){
    // make an object to return at the end
    var obj = {};
    // loop over string, for each character
    for(var char of str)
    {
        
        char = char.toLowerCase();
        
        if(/[a-z0-9]/.test(char)){
            // if the char is a number/letter and is a key in object, add one to object
            obj[char] = ++obj[char] || 1;
            // "hi.charCodeAt(0) return 104 because it is the ascii of small letter 'h'. "
            // if(obj[char] > 0)
            // {
            //     obj[char]++;
            // }
            // else
            // {
            //     // if the number/letter is not in the object , add it to the object and set value to 1 
            //     obj[char] = 1;
            // }
        }
    }
    return obj;
}

function same(arr1, arr2)
{
    if(arr1.length!== arr2.length)
    {
        return false;
    }

    for ( let i =0; i < arr1.length;i ++)
    {
        let correctIndex = arr2.indexOf(arr1[i]**2);
        if(correctIndex=== -1)
        {
            return false;
        }
        arr2.splice(correctIndex,1);
    }
    return true;
    
}

let isSame = same([1,2,3],[1,9,4]);
console.log(isSame);

let res = charCount("hello; world 9");
console.log(res);



let sum=addUpTo(1000000);
console.log("sum = ", sum);

let sum2 = sumTwo(12,5);
console.log("Sum of two numbers = ", sum2);