package demo;

public class J9 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
int a=0,b=1,c,i;
System.out.print(a+" "+b+" ");
for(i=0;i<5;i++)
{
	c=a+b;
	System.out.print(c+" ");
	a=b;
	b=c;
}
	}

}
