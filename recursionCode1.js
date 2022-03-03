// write a recursive function to print the numbers upto n in reverse order
function printNumber(n)
{
    if(n<=0)
    {
        console.log("All Done!");
        return;
    }
    console.log(n);
    n--;
    printNumber(n);
    
}

// Write a function that calculates the power given the base and exponent
function Power(base, exponent)
{
    return Math.pow(base,exponent);
}
console.log("\n2 raised to power 3 = ", Power(2,3))


// write a function to sum the numbers upto n
function sumRange(n)
{
    if(n===1)
    {
        return 1;
    }

    return n+sumRange(n-1);
}

function Factorial(n)
{
    if(n===0)
    {
        return 1
    }
    return n*Factorial(n-1);
}

function productOfArray(arr1)
{
    if(arr1.length===0)
    {
        return;
    }
    let product=1;
    for(let i=0; i< arr1.length; i++)
    {
        product= product * arr1[i];
    }
    return product;
}

// Write to find a fibonacci series
function fib(n)
{
   if(n<=2)
   {
       return 1;
   }
    return fib(n-1) + fib(n-2);
}
console.log("fib = ", fib(28));

console.log("Result of productOfArray() function is  : ", productOfArray([1,2,3]));

console.log("Result of Factorial() function is : ", Factorial(5));

console.log("\nResult of SumRange function: ",sumRange(5));

console.log("\nResult of function printNumber is Below:");
printNumber(5);


