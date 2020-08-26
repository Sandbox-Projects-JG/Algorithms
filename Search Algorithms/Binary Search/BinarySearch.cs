using System.Collections;
using System.Collections.Generic;


public class BinarySearch
{
    public int[] nums = new int[] { 10, 20, 30, 40, 50, 60, 70, 80 };
    public int valueToFind;

  
  //returns an integer value if we 
    int SearchBinary(int[] arr, int val)
    {
        int start = 0;
        int end = arr.Length - 1;
        int middle = Mathf.FloorToInt((start + end) / 2);

        while (arr[middle] != val && start <= end)
        {
            if (val < arr[middle]) end = middle - 1;
            else start = middle + 1;
            middle = Mathf.FloorToInt((start + end) / 2);
        }

        return arr[middle] == val ? middle : -1;
    }

   
}
