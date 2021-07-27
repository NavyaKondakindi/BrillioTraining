/*pattern1*/

for(var i=0;i<5;i++)
{
    console.log("")
    for(var j=0;j<=i;j++)
    {
        console.log("*")
    }
}

/*pattern2*/
var rows = 5;
for(var i=1; i<=rows; i++)
{
for(var k=1; k<=( rows-i ); k++)
{
console.log(" ");
}
for(var j=1; j<=i; j++)
{
console.log("* ");
}
console.log("<br/>");
}

/*pattern 3*/
let n = 5; 
let string = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  for (let k = 0; k < 2 * (n-i) - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
