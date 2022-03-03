// Write a function to find an index of the element in an array using Binary Search Algorithm
function binarySearch(arr1, element)
{
    let left=0;
    let right= arr1.length-1;
    
    for(let i=0; i< arr1.length;i++)
    {
        if(element===arr1[left])
        {
            return left;
        }
        if(element===arr1[right])
        {
            return right;
        }
        let middle = Math.floor( (left+right)/2);
        if(element=== arr1[middle])
        {
            return middle;
        }
        if(element> arr1[middle])
        {
            left= middle;
        }
        if(element< arr1[middle])
        {
            right= middle
        }

    }
    return -1;
}

console.log(binarySearch([0,1,2,3,4,5,6],5));