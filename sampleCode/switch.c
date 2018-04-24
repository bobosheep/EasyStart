#include<stdio.h>

int main()
{
    int number;

    scanf("%d", &number);

    switch(number)
    {
        case 1:
            printf("number is 1\n");
            break;
        case 2:
            printf("number is 2\n");
            break;
        case 10:
            printf("number is 10\n");
            break;
        default:
            printf("Your number is not 1, 2 or 10.\n");
            break;
    }

    return 0;
}
