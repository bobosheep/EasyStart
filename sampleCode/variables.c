#include <stdio.h>

int main()
{
	int a, b = 5;
	float score = 87.9487;
	char c[50]="Hello World!";

	printf("a = %d, b = %d\n", a, b);
    /*  螢幕上顯示 a = 5, b = 5 */
	printf("score = %f\n", score);
    /*  螢幕上顯示 score = 87.948700 */
	printf("score = %.2f\n", score);
	/*  螢幕上顯示 score = 87.95 */
	printf("%s\n", c);
	/*  螢幕上顯示 Hello World! */

	return 0;
}
