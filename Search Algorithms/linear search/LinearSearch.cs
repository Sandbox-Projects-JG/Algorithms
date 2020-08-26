using System;
using System.Collections;
using System.Collections.Generic;


public class LinearSearch
{
    public int[] numberArray = new int[] { 12, 15, 2, 4, 8, 22, 30 };
    public int valueToFind = 22;

    int SearchLinear(int[] nums, int val)
    {
        int index = Array.IndexOf(nums, val);
        if (index > 0)
        {
          
            return index;
        }
        else
        {
        
            return -1;
        }

       
    }   


}