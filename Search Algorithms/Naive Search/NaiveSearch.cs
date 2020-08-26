using System.Collections;
using System.Collections.Generic;


public class NaiveSearch 
{
    public string longString = "ABCabcAABBcabcTTabcBBA";
    public string shortString = "abc";


    int SearchNaive(string longString, string shortString)
    {
        int count = 0;
        for (int i = 0; i < longString.Length; i++)
        {
            for (int j = 0; j < shortString.Length; j++)
            {
                //we break out of the loop if there is no match between characters
                if (shortString[j] != longString[i + j])
                {
                    break;
                }
                //if we made it to the end of the shortString that means we had a match
                if (j == shortString.Length - 1)
                {
                    count++;
                }
            }
        }

        return count;
    
    
    }




}
