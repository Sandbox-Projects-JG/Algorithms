using System;


public class RecursionExamples {


int Power(int baseNum, int exponent) {
  if (exponent == 0) return 1;
  return baseNum * Power(baseNum, exponent - 1);
}

int Factorial(int x) {
  if (x < 0) return 0;
  if (x <= 1) return 1;
  return x * Factorial(x - 1);
}


   int ProductOfList(List<int> nums)
    {
        if (nums.Count== 0)
        {
            return 1;
        }
        nums.RemoveAt(1);
        return nums[0] * ProductOfList(nums);
    }

}