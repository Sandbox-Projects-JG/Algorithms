using System;
using System.Collections.Generic;

public class Recursion {


void CountDown(int num)
{
    if(num <= 0) {
        return;
    }
    num--;
    CountDown(num);
}

}


