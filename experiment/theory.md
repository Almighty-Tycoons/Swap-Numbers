<h2>Using a temporary variable</h2>

The simplest and probably most widely used method to swap two variables is to use a third temporary variable:

define swap (x, y)
temp := x
x := y
y := temp


<b>Step:1 Declare 3 variables</b>

int num1,num2,temp;


<b>Step:2 Input values in two variables.</b>

printf("enter values of num1, num2");
scanf("%d %d",&num1,&num2);


<b>Step:3 Transfer the value of num1 in temp, then value of num2 in num1 and in last value of temp in num2.</b>

temp = num1;
num1=num2;
num2=temp;


Now the values of num1 & num2 are exchanged

While this is conceptually simple and in many cases the only convenient way to swap two variables, it uses extra memory. Although this should not be a problem in most applications, the sizes of the values being swapped may be huge (which means the temporary variable may occupy a lot of memory as well), or the swap operation may need to be performed many times, as in sorting algorithms.
