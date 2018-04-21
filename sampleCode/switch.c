#include<stdio.h>

int main()
{
    int number = 2;

    switch(number)
    {
        case 1:
            printf("number is 1\n");
            break;
        case 2:
            printf("number is 2\n");
            /*  螢幕會顯示這行 */
            break;
        case 10:
            printf("number is 10\n");
            break;
        default:
            printf("I don't know the value of the number\n");
            break;
    }

    return 0;
}
