// problem: function to find the index of given element in the array.
// if the element is not in the array then return -1;
function linearSearch(arr1, element)
{
    for(let i =0;i<arr1.length; i++)
    {
        if(arr1[i]===element)
        {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([1,3,5,6],6));