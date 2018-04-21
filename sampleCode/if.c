#include<stdio.h>

int main()
{
  int a = 0, b = 1, c = 2;

    if(a == b)
        printf("a is equal to b!\n");
    else if(a < b)
        printf("a is smaller than b!\n");
    else
        printf("a is bigger than b!\n");

    if(a == b || a == c)
    {
        printf("a is equal to b OR a is equal to c!\n");
    }
    
    return 0;
}