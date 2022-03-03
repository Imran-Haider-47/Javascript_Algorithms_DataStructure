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

console.log("Result of Factorial() function is : ", Factorial(5));

console.log("\nResult of SumRange function: ",sumRange(5));

console.log("\nResult of function printNumber is Below:");
printNumber(5);