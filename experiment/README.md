This folder has 
### Aim  <br>
To learn how to swap values of two variables using a third variable.
### Theory  <br>
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

Now the values of num1 & num2 are exchanged.

While this is conceptually simple and in many cases the only convenient way to swap two variables, but it alos uses extra memory.<br>
<b>Application of swaping:</b><br>
Swap operation may need to be performed many times, as in sorting algorithms.

### Procedure<br>
1. Start the simulator.<br>
2. Enter the values of two variables.<br>
3. Clicks on the "OK" button.<br>
4. Code will be visible in the code block.<br>
5. Click on "NEXT" button.<br>
6. Simulator will display both variables in the memory block.<br>
7. Click on "Next" button until the whole process of swapping completed.<br>
8. In result we will get swapped variables.<br>

### Pre Test<br>
1) Which of the following is not token in C Language.?<br>
A) Keywords<br>
B) Operators<br>
<b>C) Functions</b><br>
D) Identifiers<br>

2) Which statement is true for Identifier in C Language.?<br>
<b>A) Identifiers are names for entities in a C program, such as variables, arrays, functions etc.</b><br>
B) Identifiers have fixed meanings.<br>
C) Identifiers are the smallest unit <br>
D) All the above.<br>


3) Operator % in C Language is called.?<br>
A) Percentage Operator<br>
B) Quotient Operator<br>
<b>C) Modulus</b><br>
D) Division<br>


4) Which of the following is a right statement.<br>
<b>A) int my_age = 10;</b><br>
B) int my,age = 10;<br>
C) int my age = 10;<br>
D) All are right<br>

5) Each statement in a C program should end with ?<br>
<b>A); (Semicolon )</b><br>
B) (Colon) :<br>
C) . (dot symbol)<br>
D) None of the above.<br>

### Post Test<br>
Q 1 - Which code will perform swapping(exchange) of variables.<br>
A.  a=b; b=a;<br>
B.  temp=a; b=temp; a=b;<br>
<b>C.  temp=a; a=b; b=temp;</b><br>
D.  Both b and c<br>
<br>
Q 2 -Output will be:<br> #include<stdio.h> <br>main()<br> {printf("Hello");} <br>
A.  Compile error<br>
B.  No output<br>
<b>C.  Prints “Hello” once.</b><br>
D.  Infinite loop<br><br>

Q 3 -Output will be:<br> void main() <br>{ printf("includehelp.com\rOK\n");<br> printf("includehelp.com\b\b\bOk\n"); }<br>

<b>A. OKcludehelp.com <br>includehelp.okm</b><br>
B.  OK includehelp.ok<br>
C.  OK includehelp.okm<br>
D.  includehelp.com<br> includehelp.okm<br>

Q 4 -Output will be:<br> void main()<br>{ int a=0;<br> a=5||2|1;<br> printf("%d",a); }<br>
A. 8<br>
B. 0<br>
C.  7<br>
<b>D.  1</b><br>

Q 5 -Output will be:<br> int main()<br> { int a=100; <br>printf("%d\n",a); <br>int b=a;<br>int temp=b;<br>printf("Value is = %d",temp);<br> return 0; }<br>
A. 100<br> 100<br>
<b>B. 100<br>Value is = 100</b><br>
C.  101, <br>Value is = 103<br>
D.  ERROR<br>

### References<br>
1. https://en.wikipedia.org/wiki/Swap_(computer_programming)
