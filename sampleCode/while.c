#include<stdio.h>


int main()
{
    int number;

    scanf("%d", &number);
    while(number > 0)
    {
        printf("number is %d.\n", number);
        number = number - 1;
    }
    return 0;
}