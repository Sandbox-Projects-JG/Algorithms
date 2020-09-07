 using System;
 using System.Collections.Generic;
 public class TwoSums {
    public int[] numbers = new int[] {2, 4, 2, 12};
    public int target = 16;
 int[] TwoSum(int[] nums,int target ) {
        //we create a new integer array with two 'slots' ready to be filled in
        int[] targetIndices = new int[2];
        //use the first loop to check each number in the array
        for (int i = 0; i < nums.Length; i++)
        {
            //we check each number after 'i' then add them to see if they match the target
            for (int j = i+1; j < nums.Length; j++)
            {
                if (nums[i] + nums[j] == target)
                {
                    //assign the values or 'i' and 'j' to the array for the first two 'slots'
                    targetIndices[0]= i;
                    targetIndices[1] = j;
                    //if we found a match we should break to avoid continuing the loop
                    break;
                }
            }
        }
        Debug.Log(targetIndices[0] + " " + targetIndices[1]);
        //return the array that holds the indices of the values that match the target
        return targetIndices;
      
    }
 }