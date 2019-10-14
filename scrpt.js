document.write("<h1>Hello World</h1>");
document.write("<h2>Hello World</h2>");
var x = 16;
var y = 12;
var z = 0;
document.write(z=x+y)
x = 0;
if(x%2 == 0 && x != 0)
{
    document.write("Even");
}
else if (x < 0)
{
    document.write("Negative")
}
else if(x==0)
{
    document.writeln("Zero \n")
}
else
{
    document.write("Odd")
}
// Switch case starts below - 
var day = 1 ;
switch(day)
{
    case 1:
        document.writeln("\n Sunday");
        break;
    case 2:
        document.writeln("Monday");
        break;
    case 3:
        document.writeln("Tuesday");
        break;
    default:
        alert("Invalid Input!")
}
// Loops start below - 
// For loop:- 
var x = 1
for (; x <= 10; x++)
{
    document.write("<h2>" + ( 17*x) + "</h2>");
}
// while loop:-

var x = 1
while (x<5)
{
    x =6
}
// Function begings here- 

function add2Nums(a,b)
{
    var total = a + b;
    //document.write("total is " + total);
    return total;
}

var out = add2Nums(5 ,  998)
document.write(out);

// array in js:-

var cars=["BMW", "Volvo", "Audi"];
for ( i = 0 ; i<3; i++)
{
    document.writeln(cars[i]);
}