The simplest and probably most widely used method to swap two variables is to use a third temporary variable.Swapping is a technique in which variables exchange their values. In computer programming, the act of swapping two variables refers to mutually exchange the values of the variables.<br>
<b>Algorithm of swapping</b>
define swap (x, y)<br>
temp := x<br>
x := y<br>
y := temp<br>
Declare 3 variables of data type int or float and set default valur of temp is zero.<br>
int num1,num2,temp=0;<br>
Take input with the help of scanf function.<br>
printf("enter values of num1, num2");<br>
scanf("%d %d",&num1,&num2);<br>
Transfer the value of num1 in temp, then value of num2 in num1 and in last value of temp in num2.<br>
temp = num1;<br>
num1=num2;<br>
num2=temp;<br>

Now the values of num1 & num2 are exchanged

While this is conceptually simple and in many cases the only convenient way to swap two variables, but it alos uses extra memory.<br>
<b>Application of swaping:</b><br>
Swap operation may need to be performed many times, as in sorting algorithms
