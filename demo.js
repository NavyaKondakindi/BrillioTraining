// let i; /*question 1*/
// i=10;
// console.log(i+"outside the block")
// if(i>5)
// {
//     let i=2;
//     console.log(i+"in local")
// }
// console.log(i+"after local")


/*2read input from user*/
// var readline=require('readline');
// var a=readline.createInterface(process.stdin,process.stdout);
// a.question("what is your name?",(name)=>{
//     console.log(name);
//     a.close();
// });

//*3 question//

/*var totalMarks=100
var obtained=65
if(obtained==95)
{
    console.log("Topper...")
}
else if(obtained>65 && obtained>33)
{
    console.log("First Division")
}
else {
    console.log("Work hard")
}*/

//4 question
var a=5
var b=1
var c=a&b
console.log(c)
var c=a|b
console.log(c)
var c=~a
console.log(c)
var c=a<<b
console.log(c)

/*assignment logical operators*/
var a=100;
var b=100;

if(a==100 && b==100)
{
    console.log("true")
}
if(a==100 || b==200)
{
    console.log("false")
}
if(a!=200)
{
    console.log("true")
}

/*assignment operator*/
var x=10;
x+=2
console.log(x)
x-=2
console.log(x)
x*=2
console.log(x)
x/=2
console.log(x)

/*ternary operator*/
a=10;
b=20
a>b?console.log("true"):console.log("false")

/*comma operator*/

let x=1
x=(x++,x)
console.log(x)

/*switch*/
var res;
var a=prompt("Enter 1");
var b=prompt("Enter 2");
var c=prompt("Enter operator");
switch(c)
{
    case '+':
        res=a+b;
        break;
    case '-':
        res=a-b;
        break;
}
/*loop*/
for(var i=0;i<10;i++)
{
    console.log(i)
}
/*while*/
var n=1
while(n<10)
{
    console.log(n)
    n++;
}
/*for*/
var list=[1,2,3,4]
for(var x of list)
{
    console.log(x)
}

/*do while*/
var n=1
do{
    console.log(n)
    n++;
}while(n<10);

/*nullish operator*/
var a=null??'bye';
console.log(a)

/*functions*/
function sum(a,b)
{
    var res=a+b;
}
c=sum(2,3)
console.log(c)
/*percentage*/
function per(a,b)
{
    var res=a*100/b
}
c=per(100,50)
console.log(c)
